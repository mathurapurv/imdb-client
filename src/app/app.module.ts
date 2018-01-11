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


@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    ListMovieComponent,
    SearchMovieComponent
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
