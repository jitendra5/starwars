import { Component, OnInit } from '@angular/core';
import { SwServiceService } from '../sw-service.service';
import { Film } from '../film';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {map} from 'rxjs/operators'
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  films: Film;
  id:number;
  constructor(private _swservice: SwServiceService, private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.id=+params.get('id');
      this._swservice.getFilmById(+params.get('id'))
        .filter(item=>item.episode_id===this.id)
        .subscribe(x=>console.log(x));
    });


  }
}
