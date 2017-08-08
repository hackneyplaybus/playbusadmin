import { Component, OnInit ,EventEmitter, Output } from '@angular/core';
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
    @Output() onTerm = new EventEmitter<Term>();
    completeCarer(term: string): void {
        let termVal = new Term();
      
        termVal.term = term;
        termVal.type = 'carer';

        this.onTerm.emit(termVal);
    }  

    ethnicityList: string[];
    benefitList: string[];

    private carer = new Carer();

    submitCarer(): void {
      this.carerService.submitCarer(this.carer).then(carer => {        
          this.router.navigate(['/consent', {carer_id: carer.carer_id, family_id: carer.family_id}]);
          window.scrollTo(0, 0);

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