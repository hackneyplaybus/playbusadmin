import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Location } from './location'
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {

    private locationUrl(): string {
        return '/api/location/all';
    }

    private addLocationUrl(): string {
        return '/api/location/create';
    }
    
    private locationList = new Subject<Location[]>();
    locationList$ = this.locationList.asObservable();
    staticLocationList: Location[];

    constructor(private http: Http) { }
    private called = false;
    init(): void {         
        if (this.called) {
            return
        }
        this.called = true;
        this.getLocations().then(locations => {
                 this.locationList.next(locations);
                 this.staticLocationList = locations;
             })
    }

    getLocations(): Promise<Location[]> {
         return this.http.get(this.locationUrl(), this.options)
             .toPromise()
             .then(response => response.json() as Location[])             
             .catch(this.handleError);
    }

    addLocation(location: Location): Promise<Location> {
        return this.http.post(this.addLocationUrl(), location, this.options)
             .toPromise()
             .then(response => response.json() as Location)             
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}
