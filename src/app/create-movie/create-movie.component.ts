import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MovieModel} from '../model/movie.model';
import {MovieBackendService} from '../services/movie-backend.service';
import {Response} from '@angular/http';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})
export class CreateMovieComponent implements OnInit {

  @ViewChild('movieCreateForm')
  movieCreateForm: NgForm;


  constructor(private movieService:  MovieBackendService ) { }

  ngOnInit() {
  }


  onSubmit() {
    const newMovie = new MovieModel(this.movieCreateForm.value.name, this.movieCreateForm.value.releaseDate);

    this.movieService.createNewMovieonBackend(newMovie).subscribe(
      (response) => {
        console.log('added movie with id : ' + response.json());
        this.movieCreateForm.resetForm();
        this.movieService.listRefreshedEvent.emit();
      },
      (error) => {
        console.log('unable to add movie  : ' + error);
      }
    );

  }
}
