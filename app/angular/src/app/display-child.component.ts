import { Component, Input } from '@angular/core';
import { Child }            from './child';

@Component({
  selector: 'display-child',
  templateUrl: "./templates/display-child.component.html"
})
export class DisplayChildComponent {
    @Input() child: Child;
    entity = 'child';
    deleteModal = false;
    editModal = false;
    editTitle = 'Edit Child';

    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    closeEditModal(event: Event): void{
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    }

    onEdit(child: Child): void {
        this.editModal = false;
    }
}