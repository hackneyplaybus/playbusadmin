import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FamilyService } from './family.service';
import { Family } from './family';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'family-view',
  templateUrl: `./templates/family.component.html`,
})
export class FamilyComponent implements OnInit{
    private family: Family;

    ngOnInit(): void {
        this.family = new Family(); 
        this.route.paramMap
            .switchMap((params: ParamMap) => this.familyService.getFamily(params.get('familyId')))
            .subscribe(family => this.family = family);
    }

    constructor(
        private familyService: FamilyService, 
        private route: ActivatedRoute,
    ){}
}