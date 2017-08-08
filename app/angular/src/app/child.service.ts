import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import { Child } from './child';

@Injectable()
export class ChildService {

	private childUrl(): string {
        return '/api/child'
    }

	constructor(private http: Http) { }

	submitChild(child: Child): Promise<Child> {
		return this.http.post(this.childUrl()+"/create", child, this.options)
             .toPromise()
             .then(response => response.json() as Child)
             .catch(this.handleError);
	}

    getFamilyChildren(familyId: string): Promise<Child[]> {
        return this.http.get(this.childUrl()+"", this.options)
            .toPromise()
            .then(response => response.json() as Child[])
            .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}