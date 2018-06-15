import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  images = [];
  constructor() {}
  @Output() valueChange = new EventEmitter();
  ngOnInit() {
    for (var i = 1; i < 11; i++) {
      this.images.push('Star-Wars-' + i + '.jpeg');
    }
  }
  changeBackground() {
    this.valueChange.emit(this.counter);
  }
}
