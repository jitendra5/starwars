import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { FilmsComponent } from './films/films.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [AppComponent, NavbarComponent, MainscreenComponent, FilmsComponent, FooterComponent],
  imports: [BrowserModule,  AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
