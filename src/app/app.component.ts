import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  getBackgroundImg(): any {
    return "url('assets/images/episode 1.jpg') ";
  }
  constructor(public renderer: Renderer2) {}

  clickMe() {
    this.renderer.setStyle(
      document.body,
      'background-image',
      this.getBackgroundImg()
    );
  }
}
