import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Consent } from  './consent';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConsentService {

    private consentUrl(type: string): string {
        return '/api/'+type+'/photoconsent';
    }

    constructor(private http: Http) { }
    private called = false;
    updateConsent(consent: Consent): Promise<any> {
        return this.http.post(this.consentUrl((consent.child_id) ? 'child' : 'carer'), consent, this.options)
             .toPromise()
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}
