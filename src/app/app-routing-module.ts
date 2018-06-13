import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import {FilmDetailComponent} from './film-detail/film-detail.component';
import {FilmsComponent} from './films/films.component';
const appRoutes: Routes = [
  {path:'', component:FilmsComponent},
  {path:'film/:id', component:FilmDetailComponent},
  {path:'*', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
