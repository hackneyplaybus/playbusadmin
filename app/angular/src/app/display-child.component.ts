import { Component, Input } from '@angular/core';
import { Child }            from './child';

@Component({
  selector: 'display-child',
  templateUrl: "./templates/display-child.component.html"
})
export class DisplayChildComponent {
    @Input() child: Child;
}