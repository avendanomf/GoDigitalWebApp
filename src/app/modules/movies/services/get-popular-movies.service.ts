import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class GetPopularMoviesService {

  myAppUrl = 'https://localhost:44309/';
  myApiUrl = 'Movies/GetPopularMovies';

  constructor(private http: HttpClient) {
  }

  getPopularMovies(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl);
  }

}