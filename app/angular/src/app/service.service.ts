import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Service } from './service'
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceService {

    private serviceUrl(): string {
        return '/api/service/all';
    }
    private addServiceUrl(): string {
        return '/api/service/create';
    }
    
    private serviceList = new Subject<Service[]>();
    serviceList$ = this.serviceList.asObservable();
    staticServiceList: Service[];

    constructor(private http: Http) { }
    private called = false;
    init(): void {         
        if (this.called) {
            return
        }
        this.called = true;
        this.getServices().then(services => {
                 this.serviceList.next(services);
                 this.staticServiceList = services;
             })
    }


    getServices(): Promise<Service[]> {
         return this.http.get(this.serviceUrl(), this.options)
             .toPromise()
             .then(response => response.json() as Service[])             
             .catch(this.handleError);
    }

    addService(service: Service): Promise<Service> {
        return this.http.post(this.addServiceUrl(), service, this.options)
             .toPromise()
             .then(response => response.json() as Service)             
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}
