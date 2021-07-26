import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PopularMovie } from '../../interfaces/popularMovie';
import { GetPopularMoviesService } from '../../services/get-popular-movies.service';
import { ModalDatailsComponent } from '../modal-datails/modal-datails.component';

@Component({
  selector: 'app-get-popular-movies',
  templateUrl: './get-popular-movies.component.html',
  styleUrls: ['./get-popular-movies.component.css']
})
export class GetPopularMoviesComponent implements OnInit {

  popularmovies: PopularMovie[] = [];
  filtro_valor: string;
  constructor(
    private modalService: NgbModal,
    private _getPopularmovies: GetPopularMoviesService,
  ) {
    this.filtro_valor = "";
  }

  getPopularMovies() {
    this._getPopularmovies.getPopularMovies().subscribe(data => {
      this.popularmovies = data.results;
    }, error => {
      console.log(error);
    });
  }

  openModal(obj: any) {
    const modalRef = this.modalService.open(ModalDatailsComponent);
    modalRef.componentInstance.tittle = "Popular: detalle";
    modalRef.componentInstance.idMovie = obj;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      console.log(receivedEntry);
    })
  }

  handleSearch(value: any) {
    this.filtro_valor = value;
  }

  ngOnInit(): void {
    this.getPopularMovies();
  }

}
