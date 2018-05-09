import { Component, OnInit ,EventEmitter, Output, Input } from '@angular/core';
import { Router }  from '@angular/router';
import { Carer } from './carer';
import { Term } from './complete-name.component';
import { EthnicityService } from './ethnicity.service';
import { BenefitService } from './benefit.service';
import { CarerService } from './carer.service';

@Component({
  selector: 'carer-edit',
  templateUrl: `./templates/carer.component.html`,
})
export class CarerComponent implements OnInit{
    @Input() familyId: string;
    @Input() title = 'Register A Carer';
    @Output() onTerm = new EventEmitter<Term>();
    completeCarer(term: string): void {
        let termVal = new Term();
      
        termVal.term = term;
        termVal.type = 'carer';

        this.onTerm.emit(termVal);
    }  
    @Output() onSubmit = new EventEmitter<Carer>();
    ethnicityList: string[];
    benefitList: string[];

    @Input() carer = new Carer();

    submitCarer(): void {
      if (this.familyId) {
        this.carer.family_id = this.familyId;
      }
      if (this.carer.first_seen && !this.carer.first_seen.endsWith('Z')) {
        this.carer.first_seen = this.carer.first_seen + 'T00:00:00Z';      
      }
      this.carerService.submitCarer(this.carer).then(carer => {        
          this.onSubmit.next(carer);
        });
    }

    ngOnInit(): void {
      this.ethnicityList = this.ethnicityService.staticEthnicityList;
      this.ethnicityService.ethnicityList$.subscribe(
        ethnicities => {
          this.ethnicityList = ethnicities;
        });

      this.benefitList = this.benefitService.staticBenefitList;
      this.benefitService.benefitList$.subscribe(
        benefits => {
          this.benefitList = benefits;
        });
    }
    constructor(
      private router: Router,
      private carerService: CarerService,
      private ethnicityService: EthnicityService, 
      private benefitService: BenefitService) {
        ethnicityService.init();
        benefitService.init();
    }
}