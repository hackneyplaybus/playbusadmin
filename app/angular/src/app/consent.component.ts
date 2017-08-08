import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consent } from './consent';
import { ConsentService } from './consent.service';

@Component({
  selector: 'consent-question',
  templateUrl: `./templates/consent.component.html`,
})
export class ConsentComponent implements OnInit {

    private consent = new Consent();
    private familyId: string;

    submitConsent():void {
        this.consentService.updateConsent(this.consent).then(() => {
            this.router.navigate(['/family', this.familyId])
        });
    }

    ngOnInit() {
        this.route
        .params
        .subscribe(params => {
            if (params['child_id']){
                this.consent.child_id = params['child_id']
            }
            if (params['carer_id']){
                this.consent.carer_id = params['carer_id']
            }

            this.familyId = params['family_id'];
        });
    }

    constructor(private route: ActivatedRoute,
        private router: Router,
        private consentService: ConsentService){}
}
