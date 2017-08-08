import { Component } from '@angular/core';
import { Term } from './complete-name.component';

@Component({
  selector: 'add-people',
  templateUrl: `./templates/people.component.html`,
})
export class PeopleComponent {
  tab: string = 'carer';
  activeTab: boolean = true;
  term: Term;

  onTerm(term: Term): void {
    this.term = term;
  }
}