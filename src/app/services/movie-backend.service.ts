import {EventEmitter, Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {MovieModel} from '../model/movie.model';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MovieBackendService {

  public listRefreshedEvent = new EventEmitter();
  public movieSearchTriggeredEvent = new EventEmitter<string>() ;

  constructor(private http: Http) {
  }

   // http://localhost:8080/


  createNewMovieonBackend(movie: MovieModel): Observable<Response> {
    console.log(movie);
    return this.http.post('api/createMovie', movie);
  }


  listAllTheMovies(): Observable<Response> {
    return this.http.get('api/listMovies');
  }

  listRecommendedMovies(): Observable<Response> {
    return this.http.get('api/listRecommendedMovies');
  }


  searchMoviesByName(movieName: string): Observable<Response> {
    return this.http.get('api/movieByName/' + movieName);
  }

  deleteMovieById(movieID: number): Observable<Response> {
    return this.http.get('api/deleteMovieByID/' + movieID);
  }


}
