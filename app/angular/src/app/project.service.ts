import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Project } from './project'
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {

    private projectUrl(): string {
        return '/api/project/all';
    }
    
    private projectList = new Subject<Project[]>();
    projectList$ = this.projectList.asObservable();
    staticProjectList: Project[];

    constructor(private http: Http) { }
    private called = false;
    init(): void {         
        if (this.called) {
            return
        }
        this.called = true;
        this.http.get(this.projectUrl(), this.options)
             .toPromise()
             .then(response => response.json() as Project[])
             .then(projects => {
                 this.projectList.next(projects);
                 this.staticProjectList = projects;
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
