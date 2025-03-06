import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'reto007';

  name!: string;

  cities: string[] = ['Barcelona', 'Mardrid', 'Peru', 'Mexico'];

  selection!: string;

  criterio:string = ''

  addNewCity(city: string): void {
    this.cities.push(city);
  }

  onCityClicked(city: string) {
    console.log('city -->');
    this.selection = city;
  }

  onClear() {
    this.selection = '';
  }
}
