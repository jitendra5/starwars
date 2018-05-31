import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.component.html',
  styleUrls: ['./mainscreen.component.css']
})
export class MainscreenComponent implements OnInit {
  constructor() {}
  scrollScreen() {
    window.scrollTo({ left: 0, top: 700, behavior: 'smooth' });
  }

  ngOnInit() {}
}
