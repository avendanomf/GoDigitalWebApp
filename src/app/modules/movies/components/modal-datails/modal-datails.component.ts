import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { movies } from '../../interfaces/movies';
import { GetMovieDetailService } from '../../services/get-movie-detail.service';

@Component({
  selector: 'app-modal-datails',
  templateUrl: './modal-datails.component.html'
})
export class ModalDatailsComponent implements OnInit {
  @Input() public idMovie: any ;
  @Input() public tittle: any = "Detalle";
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  movie : movies;
  constructor(
    public activeModal: NgbActiveModal,
    private _getMovieDetail: GetMovieDetailService
  ) { 
    this.movie = new movies();
  }

  getMovieDetail() {
    this._getMovieDetail.getMovieDetail(this.idMovie).subscribe(data => {
      this.movie = data;
      //console.log(this.idMovie);
      console.log(data);
    }, error => {
      //this.toastr.error(error);
      console.log(error);
    });
  }

  ngOnInit(): void {
    console.log(this.idMovie);
    this.getMovieDetail();
  }
  passBack() {
    this.activeModal.close();
  }
}
