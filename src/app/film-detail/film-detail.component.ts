import { Component, OnInit } from '@angular/core';
import { SwServiceService } from '../sw-service.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  films: Film[];
  constructor(private _swservice: SwServiceService) {}

  ngOnInit() {
    this._swservice.getFilms().subscribe(x => console.log(x));
  }
}
