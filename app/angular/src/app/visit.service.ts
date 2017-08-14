import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { Visit } from './visit';

@Injectable()
export class VisitService {

	private visitUrl(): string {
        return '/api/visit/create';
    }

	constructor(private http: Http) { }

    addVisit(visit: Visit): Promise<Visit> {
        return this.http.post(this.visitUrl(), visit, this.options)
            .toPromise()
            .then(response => response.json() as Visit)
            .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}