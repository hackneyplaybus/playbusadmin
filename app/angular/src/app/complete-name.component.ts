import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CompleteNameService, ChildCarer} from './complete-name.service';
import { Child } from './child';
import { Carer } from './carer';


@Component({
  selector: 'complete-name',
  templateUrl: `./templates/complete-name.component.html`,
})
export class CompleteNameComponent {
  children: Child[];
  carers: Carer[];
  
  private _term: Term;
 
  @Input()
  set term(term: Term) {
    this._term = term;

    if (this._term &&this._term.term != '' && this._term.type != '') {
      this.populate(this._term.type, this._term.term, this._term.nameType);
    } else {
      this.children = null;
      this.carers = null;
    }
  }
 
  get term(): Term { return this._term; }  

  private goToFamily(familyId: string): void {
    this.router.navigateByUrl('/family/'+familyId);
  }

  populate(type: string, term: string, nameType: string): void {
    this.completeNameService.getPerson(type, term, nameType).then(persons => this.updateChildCarer(persons));
  }    

  private updateChildCarer(childCarer: ChildCarer): void {
    this.carers = childCarer.carers;
    this.children = childCarer.children;
  }

  constructor(
    private completeNameService: CompleteNameService,
    private router: Router) { }
}

export class Term {
  term: string;
  type: string;
  nameType: string;
}