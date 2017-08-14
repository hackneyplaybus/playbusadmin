import { Component } from '@angular/core';
import { Router }  from '@angular/router';
import { Term } from './complete-name.component';
import { Child } from './child'
import { Carer } from './carer'

@Component({
  selector: 'add-people',
  templateUrl: `./templates/people.component.html`,
})
export class PeopleComponent {
  tab: string = 'carer';
  activeTab: boolean = true;
  term: Term;
  childTitle = "Register A Child";
  carerTitle = "Register A Carer";

  onTerm(term: Term): void {
    this.term = term;
  }

  onChildSubmit(child: Child): void {
    this.router.navigate(['/consent', { child_id: child.child_id, family_id: child.family_id } ]);
  }

  onCarerSubmit(carer: Carer): void {
    this.router.navigate(['/consent', { carer_id: carer.carer_id, family_id: carer.family_id } ]);
  }

  constructor(private router: Router){}
}