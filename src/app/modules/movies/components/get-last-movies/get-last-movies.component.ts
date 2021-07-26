import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { movies } from '../../interfaces/movies';
import { MoviesComponent } from '../../pages/movies/movies.component';
import { GetLastMoviesService } from '../../services/get-last-movies.service';

@Component({
  selector: 'app-get-last-movies',
  templateUrl: './get-last-movies.component.html'
})
export class GetLastMoviesComponent implements OnInit {


  lastmovies: movies ;

  constructor(
    private _getlastmovies: GetLastMoviesService,
    //private toastr: ToastrService
  ) 
  {
    this.lastmovies = new movies();
   }

  getlastmovies() {
    this._getlastmovies.getLastMovies().subscribe(data => {
      this.lastmovies = data;
      console.log(data);
      console.log(this.lastmovies);
    }, error => {
      //this.toastr.error(error);
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getlastmovies();
  }

}
