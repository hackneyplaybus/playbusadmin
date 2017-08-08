import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { Family } from './family';

@Injectable()
export class FamilyService {

	private familyUrl(familyId: string): string {
        return '/api/family/all?familyId='+familyId;
    }

	constructor(private http: Http) { }

    getFamily(familyId: string): Promise<Family> {
        return this.http.get(this.familyUrl(familyId), this.options)
            .toPromise()
            .then(response => response.json() as Family)
            .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}