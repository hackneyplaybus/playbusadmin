import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AgmCoreModule, GoogleMapsAPIWrapper, MapsAPILoader } from '@agm/core';
import { FamilyService } from './family.service';
import { ServiceService } from './service.service';
import { ReferralService } from './referral.service';
import { Family } from './family';
import { Router }  from '@angular/router';
import { Child } from './child'
import { Carer } from './carer'
import { Service } from './service'

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'family-view',
  templateUrl: `./templates/family.component.html`,
})
export class FamilyComponent implements OnInit{
    private family = new Family(); 
    family_id = 'cruft';
    private referralModal = false;
    private referralDelete = false;
    private noteDelete = false;
    private childModal = false;
    private deleteModal = false;
    private carerModal = false;
    private noteModal = false;
    private locationModal = false;
    private visitModal = false;
    private childVisitModal = false;
    private projectModal = false;
    
    private services: Service[] = [];

    entity:string;
    entityId:string;

    referralEntity = 'referral';
    referralId = '';

    noteEntity = 'note';
    noteId = '';

    lat: number = 51.5484201;
    lng: number = -0.0741668;

    closeDeleteModal(event: boolean): void {        
        this.referralDelete = false;
        this.noteDelete = false;
    }

    ngOnInit(): void {   
        this.mapsLoader.load().then(()=>{
            this.route.paramMap
            .switchMap((params: ParamMap) => {
                this.family_id = params.get('familyId');
                return this.familyService.getFamily(this.family_id);
            })
            .subscribe(family => this.family = family);
            this.serviceService.getServices().then(services => this.services = services);
        });
    }

    addService(serviceId: string): void {
        this.referralService.addReferral(this.family_id, serviceId).then(referral => {
            if (!this.family.referrals) {
                this.family.referrals = [];
            }
            this.family.referrals.push(referral);
            this.referralModal = false;
        });   
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
        private serviceService: ServiceService, 
        private route: ActivatedRoute,
        private router: Router,
        private referralService: ReferralService,
        private mapsApi: GoogleMapsAPIWrapper,
        private mapsLoader: MapsAPILoader,
    ){}
}