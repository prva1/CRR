import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
    template: `<input #box (keyup)="0" placeholder='What are you looking for?'>
      <p>{{box.value}}</p>`
})
export class SearchComponent implements OnInit {

  // TODO - to be used in what model Domain?

  constructor() { }

  ngOnInit() {
  }

}
