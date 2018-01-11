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

  createNewMovieonBackend(movie: MovieModel): Observable<Response> {
    console.log(movie);
    return this.http.post('http://localhost:8080/api/createMovie', movie);
  }


  listAllTheMovies(): Observable<Response> {
    return this.http.get('http://localhost:8080/api/listMovies');
  }

  searchMoviesByName(movieName: string): Observable<Response> {
    return this.http.get('http://localhost:8080/api/movieByName/' + movieName);
  }


}
