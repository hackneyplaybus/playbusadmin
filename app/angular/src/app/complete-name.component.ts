import { Component, Input } from '@angular/core';
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
      this.populate(this._term.type, this._term.term);
    } else {
      this.children = null;
      this.carers = null;
    }
  }
 
  get term(): Term { return this._term; }  

  populate(type: string, term: string): void {
    this.completeNameService.getPerson(type, term).then(persons => this.updateChildCarer(persons));
  }    
  
  private updateChildCarer(childCarer: ChildCarer): void {
    this.carers = childCarer.carers;
    this.children = childCarer.children;
  }

  constructor(
    private completeNameService: CompleteNameService) { }
}

export class Term {
  term: string;
  type: string;
}