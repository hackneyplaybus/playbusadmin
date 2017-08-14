import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeleteService {

    private deleteUrl(entity: string, entityId: string): string {
        return '/api/'+entity+'?id='+entityId;
    }

    constructor(private http: Http) { }

    delete(entity: string, entityId: string): void {
        this.http.delete(this.deleteUrl(entity,entityId), this.options)
             .toPromise()  
             .then(() => {
                location.reload();
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
