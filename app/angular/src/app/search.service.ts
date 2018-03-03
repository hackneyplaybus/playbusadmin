import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Child } from './child';
import { Carer } from './carer';

@Injectable()
export class SearchService {

    private searchUrl(term: string): string {
        return '/api/search/all?term='+term
    }

    constructor(private http: Http) { }

    doSearch(term: string): Promise<ChildCarer> {        
        return this.http.get(this.searchUrl(term), this.options)
             .toPromise()
             .then(response => response.json() as ChildCarer)
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}

export class ChildCarer {
    carers: Carer[];
    children: Child[];
}