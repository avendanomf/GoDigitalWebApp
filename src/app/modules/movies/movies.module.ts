import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MoviesRoutingModule } from './movies-routing.module';
import { GetLastMoviesComponent } from './components/get-last-movies/get-last-movies.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { GetPopularMoviesComponent } from './components/get-popular-movies/get-popular-movies.component';
import { GetTopRatedMoviesComponent } from './components/get-top-rated-movies/get-top-rated-movies.component';
import { TopRatedMoviesComponent } from './pages/top-rated-movies/top-rated-movies.component';
import { LastMoviesComponent } from './pages/last-movies/last-movies.component';
import { ModalDatailsComponent } from './components/modal-datails/modal-datails.component';
import { SearchComponent } from './components/search/search.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  declarations: [
    GetLastMoviesComponent,
    MoviesComponent,
    GetPopularMoviesComponent,
    GetTopRatedMoviesComponent,
    TopRatedMoviesComponent,
    LastMoviesComponent,
    ModalDatailsComponent,
    SearchComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MoviesModule { }
