import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LastMoviesComponent } from './pages/last-movies/last-movies.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TopRatedMoviesComponent } from './pages/top-rated-movies/top-rated-movies.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'populares', component: MoviesComponent },
      { path: 'recientes', component: LastMoviesComponent },
      { path: 'top-rated', component: TopRatedMoviesComponent },
      { path: '**', redirectTo: 'top-rated' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
