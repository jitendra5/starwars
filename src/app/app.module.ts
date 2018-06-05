import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing-module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainscreenComponent } from './mainscreen/mainscreen.component';
import { FilmsComponent } from './films/films.component';
import { FooterComponent } from './footer/footer.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { SwServiceService } from './sw-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainscreenComponent,
    FilmsComponent,
    FooterComponent,
    FilmDetailComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SwServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
