import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
@Input() color!:string

@Input() label!:string

@Input() selection!:string


ngOnChanges(changes: SimpleChanges): void {
  console.log('changes -->', changes)
}

ngOnInit(): void {
console.log('ngOnInit -->')
}

ngOnDestroy(): void {
console.log('ngOnDestroy -->')
}
}
