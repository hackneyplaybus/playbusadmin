import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
    @Input() familyId: string;
    @Input() title = 'Register A Child';
    @Output() onTerm = new EventEmitter<Term>();
    completeChild(nameType: string, term: string): void {
        let termVal = new Term();
      
        termVal.term = term;
        termVal.type = 'child';
        termVal.nameType = nameType;

        this.onTerm.emit(termVal);
    }  

    showANText(value: string): void {
      console.log("We got the value "+ value );
      if (value.toLowerCase() == 'yes') {
        document.getElementById('additionalNeedsText').style.display = 'block';
      } else {
        document.getElementById('additionalNeedsText').style.display = 'none';
        this.child.additional_needs_text = '';
      }
    }

    @Output() onSubmit = new EventEmitter<Child>();

    ethnicityList: string[];

    @Input() child = new Child();

    submitChild(): void {
      if (this.familyId) {
        this.child.family_id = this.familyId;
      }
      if (this.child.first_seen && !this.child.first_seen.endsWith('Z')) {
        this.child.first_seen = this.child.first_seen + 'T00:00:00Z';  
      }
      this.childService.submitChild(this.child).then(child => {
          this.onSubmit.next(child);
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
      private ethnicityService: EthnicityService) {
      ethnicityService.init();
    }
}