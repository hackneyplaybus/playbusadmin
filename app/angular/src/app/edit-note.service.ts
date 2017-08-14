import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { Note } from './note';

import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EditNoteService {

    private noteUrl(): string {
        return '/api/note/create';
    }

    constructor(private http: Http) { }

    submitNote(note:Note): Promise<Note> {
        return this.http.post(this.noteUrl(), note, this.options)
             .toPromise()
             .then(response => response.json() as Note)
             .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });     
}