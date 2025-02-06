import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './styles/landscape/mobileMedia.css', './styles/portrait/tabletMedia.css', './styles/landscape/tabletMedia.css', './styles/landscape/desktopMedia.css']
})
export class AppComponent {
  title = 'launch_countdown_timer';
}
