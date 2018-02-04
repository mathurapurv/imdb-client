import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from '../../model/movie.model';

@Component({
  selector: 'app-recommended-movie-details',
  templateUrl: './recommended-movie-details.component.html',
  styleUrls: ['./recommended-movie-details.component.css']
})
export class RecommendedMovieDetailsComponent implements OnInit {

  @Input()
  selectedMovieForDisplay: MovieModel;

  constructor() { }

  ngOnInit() {
  }

}
