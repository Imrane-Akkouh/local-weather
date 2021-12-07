import { Component } from '@angular/core';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'local-weather-app';
}
