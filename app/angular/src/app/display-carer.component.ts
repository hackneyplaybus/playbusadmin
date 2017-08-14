import { Component, Input } from '@angular/core';
import { Carer }            from './carer';

@Component({
  selector: 'display-carer',
  templateUrl: "./templates/display-carer.component.html"
})
export class DisplayCarerComponent {
    @Input() carer: Carer;
    entity = 'carer';
    deleteModal = false;
    editModal = false;
    editTitle = 'Edit Carer';

    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    closeEditModal(event: Event): void{
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    }

    onEdit(carer: Carer): void {
        this.editModal = false;
    }
}