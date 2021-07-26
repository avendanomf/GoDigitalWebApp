import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search = new FormControl('');
  @Output('search') searchEmitter = new EventEmitter<string>();
  

  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.subscribe(value => this.searchEmitter.emit(value));
  }

}
