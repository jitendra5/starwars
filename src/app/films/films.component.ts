import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  images = [];
  constructor() {}

  ngOnInit() {
    for (var i = 1; i < 11; i++) {
      this.images.push('Star-Wars-' + i + '.jpeg');
    }
    console.log(this.images);
  }
}
