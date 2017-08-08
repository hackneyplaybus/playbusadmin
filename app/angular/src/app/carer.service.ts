import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { Carer } from './carer';

@Injectable()
export class CarerService {

	private carerUrl(): string {
        return '/api/carer/create'
    }

	constructor(private http: Http) { }

	submitCarer(carer: Carer): Promise<Carer> {
		return this.http.post(this.carerUrl(), carer,this.options)
             .toPromise()
             .then(response => response.json() as Carer)
             .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}