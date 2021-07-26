import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { movies } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})
export class GetMovieDetailService {

  myAppUrl = 'https://localhost:44309/';
  myApiUrl = 'Movies/GetMoviesDetail?idMovieRequest=';

  constructor(private http: HttpClient) {
  }

  getMovieDetail(id: any): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl + id);
  }
}
