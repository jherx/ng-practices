import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cities',
  template: `
    <ul>
      <li
        (click)="onCityClicked(item)"
        [ngClass]="{ 'alert alert-info': item === selection }"
      >
        {{ item }}
      </li>
    </ul>
  `,
  styleUrls: ['./cities.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CitiesComponent {
  @Input() item!: string;
  @Input() selection!: string;
  @Output() CityClickedEvent = new EventEmitter<string>();

  onCityClicked(item: string): void {
    this.CityClickedEvent.emit(item)
  }
}
