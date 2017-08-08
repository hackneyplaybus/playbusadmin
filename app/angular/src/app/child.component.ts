import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from './child';
import { Term } from './complete-name.component';
import { EthnicityService } from './ethnicity.service';
import { ChildService } from './child.service';
import { Router }  from '@angular/router';

@Component({
  selector: 'child-edit',
  templateUrl: `./templates/child.component.html`,
})
export class ChildComponent implements OnInit {
    
    @Output() onTerm = new EventEmitter<Term>();
    completeChild(term: string): void {
        let termVal = new Term();
      
        termVal.term = term;
        termVal.type = 'child';

        this.onTerm.emit(termVal);
    }  

    ethnicityList: string[];

    private child = new Child();

    submitChild(): void {
      this.childService.submitChild(this.child).then(child => {
          this.router.navigate(['/consent', { child_id: child.child_id, family_id: child.family_id } ]);
        });
    }

    ngOnInit(): void {
      this.ethnicityList = this.ethnicityService.staticEthnicityList;
      this.ethnicityService.ethnicityList$.subscribe(
        ethnicities => {
          this.ethnicityList = ethnicities;
        });
    }

    constructor(
      private childService: ChildService,
      private router: Router,
      private ethnicityService: EthnicityService) {
      ethnicityService.init();
    }
}