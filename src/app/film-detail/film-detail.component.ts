import { Component, OnInit } from '@angular/core';
import { SwServiceService } from '../sw-service.service';
import { Film } from '../film';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, concatMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  checkEpisode(arg0: any, epid: number): Observable<Film> {
    console.log('Epid:', epid);
    var obj1 = <Film>{};
    _.forEach(arg0, function(element, i) {
      if (element['episode_id'] === epid) {
        console.log('Check episode method!!');
        console.log(element);
        obj1 = element;
      }
    });
    return Observable.create(obj1);
  }
  film = {};

  episodeId: number;
  constructor(
    private _swservice: SwServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.episodeId = +params.get('id');
      this._swservice
        .getFilmById(this.episodeId + 1)
        .map((response: Response) => {
          return this.checkEpisode(response, +params.get('id') + 1);
        })

        .subscribe(x => {
          // console.log(x);
          // console.log(JSON.stringify(x));
          this.film = x._subscribe;
          // console.log(this.film.title);
        });
    });
  }
}
