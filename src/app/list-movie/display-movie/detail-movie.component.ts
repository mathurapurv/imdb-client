import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MovieModel} from '../../model/movie.model';


@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {


  @Input()
  movieItem: MovieModel;

  @Output()
  private deleteMovieEvent = new EventEmitter<{movieID: number}>();

  constructor() {
  }

  ngOnInit() {

  }


  deleteMovie(movieID: number) {
    console.log('Deleting movieItem' + movieID);
    this.deleteMovieEvent.emit({movieID: movieID}) ;
  }

  editMovie(movieID: number) {
    console.log('Editing movie' + movieID);
  }




}
