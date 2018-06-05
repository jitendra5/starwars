import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class SwServiceService {
  constructor(private _http: HttpClient) {}

  public getFilms() {
    console.log('SERVICE RUNNING!!!!');
    return this._http.get('https://swapi.co/api/films/');

    // .subscribe(res => console.log(res))
  }
}
