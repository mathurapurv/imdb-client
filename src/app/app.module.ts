import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';


import { AppComponent } from './app.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import {HttpModule} from '@angular/http';
import {MovieBackendService} from './services/movie-backend.service';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DetailMovieComponent} from "./list-movie/display-movie/detail-movie.component";
import { RecommendedMovieComponent } from './recommended-movie/recommended-movie.component';
import { RecommendedMovieDetailsComponent } from './recommended-movie/recommended-movie-details/recommended-movie-details.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    ListMovieComponent,
    SearchMovieComponent,
    DetailMovieComponent,
    RecommendedMovieComponent,
    RecommendedMovieDetailsComponent
  ],
  imports: [
    BrowserModule , FormsModule , HttpModule , BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [MovieBackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
