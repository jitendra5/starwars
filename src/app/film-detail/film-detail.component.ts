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
      if (element.episode_id === epid) {
        console.log('Check episode method!!');
        console.log(element);
        var obj1 = element;
        console.log('obj1');
        console.log(obj1);
      }
    });
    return Observable.of(obj1);
  }
  obj: {
    title: string;
    episode_id: number;
    opening_crawl: string;
    director: string;
    producer: string;
    release_date: string;
    characters: string[];
    planets: string[];
    starships: string[];
    vehicles: string[];
    species: string[];
    created: string;
    edited: string;
  };
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
        .map((response: Response) => response)
        .filter(data => this.checkEpisode(data, this.episodeId + 1))
        .subscribe(x => console.log(x));
    });
  }
}
