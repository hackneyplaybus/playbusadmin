import { Injectable, ModuleWithProviders } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FamilyService {

	private apiKeyUrl(): string {
        return '/api/mapskey';
    }

    private key: string;

    forRoot(): ModuleWithProviders {
        this.getAPIkey().then(key => this.key = key.map_key);
        
        return AgmCoreModule.forRoot({
                apiKey: this.key
              })
    }

	constructor(private http: Http) { }

    getAPIkey(): Promise<MapKey> {
        return this.http.get(this.apiKeyUrl(), this.options)
            .toPromise()
            .then(response => response.json() as MapKey)
            .catch(this.handleError);
    }

	private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}

export class MapKey {
    map_key: string;
}