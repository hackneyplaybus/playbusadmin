import { Component, Input } from '@angular/core';
import { Visit } from './visit';

@Component({
  selector: 'visit-list',
  templateUrl: `./templates/visit-list.component.html`,
})
export class VisitListComponent {
    @Input() visits: Visit[]

    deleteModal = false;
    entity = 'visit';
    visitId: string;

    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    delete(visitId: string): void {
        this.visitId = visitId; 
        this.deleteModal = true;
    }
}
