import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FamilyService } from './family.service';
import { Family } from './family';
import { Router }  from '@angular/router';
import { Child } from './child'
import { Carer } from './carer'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'family-view',
  templateUrl: `./templates/family.component.html`,
})
export class FamilyComponent implements OnInit{
    private family = new Family(); 
    family_id = 'cruft';
    private referralModal = false;
    private childModal = false;
    private deleteModal = false;
    private carerModal = false;
    private noteModal = false;
    private locationModal = false;
    private visitModal = false;
    private childVisitModal = false;
    private projectModal = false;

    entity:string;
    entityId:string;

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.family_id = params.get('familyId');
                return this.familyService.getFamily(this.family_id);
            })
            .subscribe(family => this.family = family);
    }

    closeModal(event: Event): void{
        if (event.srcElement.classList.contains('w3-modal')) {
            this.referralModal = false;
            this.childModal = false;
            this.deleteModal = false;
            this.carerModal = false;
            this.noteModal = false;
            this.locationModal = false;
            this.visitModal = false;
            this.childVisitModal = false;
            this.projectModal = false;
        }
    }

    onChildSubmit(child: Child): void {
        this.router.navigate(['/consent', { child_id: child.child_id, family_id: child.family_id } ]);
    }
    onCarerSubmit(carer: Carer): void {
        this.router.navigate(['/consent', { carer_id: carer.carer_id, family_id: carer.family_id } ]);
    }

    constructor(
        private familyService: FamilyService, 
        private route: ActivatedRoute,
        private router: Router,
    ){}
}