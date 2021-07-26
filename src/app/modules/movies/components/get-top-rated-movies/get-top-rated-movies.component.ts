import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopularMovie } from '../../interfaces/popularMovie';
import { GetTopRatedMoviesService } from '../../services/get-top-rated-movies.service';
import { ModalDatailsComponent } from '../modal-datails/modal-datails.component';

@Component({
  selector: 'app-get-top-rated-movies',
  templateUrl: './get-top-rated-movies.component.html',
  styleUrls: ['./get-top-rated-movies.component.css']
})
export class GetTopRatedMoviesComponent implements OnInit {

  topmovies: PopularMovie[] = [] ;
  filtro_valor: string;
  constructor(
    private modalService: NgbModal,
    private _getTopRatedmovies: GetTopRatedMoviesService
  ) { 
    this.filtro_valor = "";
  }

  getTopRatedmovies() {
    this._getTopRatedmovies.getTopRatedMovies().subscribe(data => {
      this.topmovies = data.results;
    }, error => {
      console.log(error);
    });
  }
  openModal(obj: any) {
    const modalRef = this.modalService.open(ModalDatailsComponent);
    modalRef.componentInstance.tittle = "Mejor Calificada: detalle";
    modalRef.componentInstance.idMovie = obj;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
    })
  }
  handleSearch(value: any) {
    this.filtro_valor = value;
  }

  ngOnInit(): void {
    this.getTopRatedmovies();
  }

}
