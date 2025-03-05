import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
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
