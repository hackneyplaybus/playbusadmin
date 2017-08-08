import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BenefitService {

    private benefitUrl(): string {
        return '/api/benefitlist';
    }
    
    private benefitList = new Subject<string[]>();
    benefitList$ = this.benefitList.asObservable();
    staticBenefitList: string[];

    constructor(private http: Http) { }
    private called = false;
    init(): void {         
        if (this.called) {
            return
        }
        this.called = true;
        this.http.get(this.benefitUrl(), this.options)
             .toPromise()
             .then(response => response.json() as string[])
             .then(ethnicities => {
                 this.benefitList.next(ethnicities);
                 this.staticBenefitList = ethnicities;
             })
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}
