import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Referral } from './referral'
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ReferralService {

    private referralUrl(): string {
        return '/api/referral/create';
    }
    
    constructor(private http: Http) { }    

    addReferral(familyId: string, serviceId: string): Promise<Referral> {
         let referral = new Referral();
         referral.family_id = familyId;
         referral.service_id = serviceId;
        
        return this.http.post(this.referralUrl(), referral, this.options)
             .toPromise()
             .then(response => response.json() as Referral)             
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}
