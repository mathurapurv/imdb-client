import { Component, OnInit } from '@angular/core';
import {MovieBackendService} from '../services/movie-backend.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})
export class SearchMovieComponent implements OnInit {

 private  searchText: string;

  constructor(private movieService: MovieBackendService) { }

  ngOnInit() {
  }

  submitSearch() {
    console.log('Searching for : ' + this.searchText );
    this.movieService.movieSearchTriggeredEvent.emit(this.searchText);
  }


  clearSearch() {
    console.log('Clearing search' );
    this.movieService.listRefreshedEvent.emit();
  }

}
