import { Pipe, PipeTransform } from '@angular/core';
import { PopularMovie } from '../interfaces/popularMovie';
import { PopularMovies } from '../interfaces/popularMovies';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: PopularMovie[] , texto:string): PopularMovie[]  {
    return lista.filter(movie => movie.title.toUpperCase().includes(texto.toUpperCase()));
  }

}
