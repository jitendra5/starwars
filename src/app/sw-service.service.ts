import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Film } from './film';
import 'rxjs/add/operator/filter';
@Injectable()
export class SwServiceService {
  constructor(private _http: HttpClient) {}

  public getFilms() {
    console.log('SERVICE RUNNING!!!!');
    return this._http.get('https://swapi.co/api/films/');

    // .subscribe(res => console.log(res))
  }
  public getFilmById(id: number | string) {
    // console.log('GETTING THE SPECIFIC FILM!!!!');
    console.log('ID:' + id);
    // return this._http.get('https://swapi.co/api/films/'+id+'/');
    return this.getFilms().map((res: Response) => res['results']);
    // .filter(item=>item.episode_id===id)
    // .subscribe(x=>console.log(x));
  }
}
