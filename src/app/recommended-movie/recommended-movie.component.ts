import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {MovieBackendService} from '../services/movie-backend.service';

@Component({
  selector: 'app-recommended-movie',
  templateUrl: './recommended-movie.component.html',
  styleUrls: ['./recommended-movie.component.css']
})
export class RecommendedMovieComponent implements OnInit {

  selectedMovie: MovieModel;

  recommendedMovieList: MovieModel[] = [];

  constructor(private movieService: MovieBackendService) {
  }

  ngOnInit() {
    this.obtainRecommendedMovieList();
  }


  selectMovieForDisplay(movieToSelect: MovieModel) {
    this.selectedMovie = movieToSelect;
  }

  private obtainRecommendedMovieList() {

    this.movieService.listRecommendedMovies().subscribe(
      (response) => {
        this.recommendedMovieList = response.json();
        this.selectedMovie = this.recommendedMovieList[0];
      },
      (error) => {
        console.log(error);
      }
    );

  }
}
