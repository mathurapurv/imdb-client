import {Component, OnInit} from '@angular/core';
import {MovieModel} from '../model/movie.model';
import {MovieBackendService} from '../services/movie-backend.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {

  private movieList: MovieModel[] = [];

  constructor(private movieService: MovieBackendService) {
  }

  ngOnInit() {
    this.refreshMovieList();
    this.movieService.listRefreshedEvent.subscribe(
      () => {
        this.refreshMovieList();
      }
    );

    this.movieService.movieSearchTriggeredEvent.subscribe(
      (searchQuery: string) => {
        this.displaySearchResult(searchQuery);

      }
    );


  }

  refreshMovieList() {
    this.movieService.listAllTheMovies().subscribe(
      (response) => {
        this.movieList = response.json();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  displaySearchResult(searchQuery: string) {
    this.movieService.searchMoviesByName(searchQuery).subscribe(
      (response) => {
        this.movieList = response.json();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  deleteMovie(movieID: number) {
    console.log('Deleting movie' + movieID);
  }

  editMovie(movieID: number) {
    console.log('Deleting movie' + movieID);
  }



}
