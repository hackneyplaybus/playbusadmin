import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { DeleteService } from './delete.service';

@Component({
  selector: 'delete-confirm',
  template: `
<div *ngIf="deleteModal" (click)='closeModalOutside($event);' id="delete-modal" class="w3-modal">
    <div class="w3-modal-content">
        <div class="w3-container w3-card-4 w3-center w3-text-teal w3-padding-16">
            <h3>Are you sure you want to delete?</h3>
            <input class="w3-button w3-right w3-border" type="submit" value="No" (click)="closeModal()">
            <input id='delete-btn' class="w3-button w3-left w3-border" type="submit" (click)='callDelete();' value="Yes">
        </div>
    </div>
</div>
`,
  
})
export class DeleteComponent {


    @Input() deleteModal = false;
    @Input() entity: string;
    @Input() entityId: string;
    @Output() deleteModalEmitter: EventEmitter<boolean> = new EventEmitter();

    callDelete(): void {
        this.deleteService.delete(this.entity, this.entityId);
    }

    closeModalOutside(event: Event): void{
        if (event.srcElement.classList.contains('w3-modal')) {
            this.closeModal();
        }
    }

    closeModal(): void {
        this.deleteModal = false;
        this.deleteModalEmitter.next(this.deleteModal);
    }

    constructor(private http: Http, private deleteService: DeleteService) { }
    private headers = new Headers({'Content-Type': 'application/json'});
    private options = new RequestOptions({ headers: this.headers, withCredentials: true });
}
