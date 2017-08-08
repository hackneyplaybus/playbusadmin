import { Component, Input } from '@angular/core';
import { Carer }            from './carer';

@Component({
  selector: 'display-carer',
  templateUrl: "./templates/display-carer.component.html"
})
export class DisplayCarerComponent {
    @Input() carer: Carer;
}