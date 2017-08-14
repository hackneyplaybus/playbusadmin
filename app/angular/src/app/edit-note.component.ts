import { Component, Input } from '@angular/core';
import { EditNoteService } from './edit-note.service'
import { Note } from './note'
@Component({
  selector: 'edit-note',
  template: `
<div class="w3-row">
    <form id='note-form' class="w3-container w3-card-4 w3-text-yellow" style="padding-bottom: 10px;">        
        <h2 class="w3-center w3-text-teal">Add a Note</h2>          
        <div class="w3-row w3-section">
            <div class="w3-col" style="width:50px"><i class="w3-xxlarge fa fa-sticky-note"></i></div>
                <div class="w3-rest">
                    <textarea #noteTextBox (change)='note.note = (noteTextBox.value);' class="w3-input w3-border w3-round-medium" rows="5" name="note-text"  id="note-text" required></textarea>
                </div>
            </div>        
        <input (click)='submitNote();$event.preventDefault();' class="w3-button w3-right w3-text-teal w3-border" type="submit" value="Submit">
    </form>    
</div>
`,
  
})
export class EditNoteComponent {

    @Input() family_id: string;
    private note = new Note();

    submitNote(): void {
        this.note.family_id = this.family_id;
        this.editNoteService.submitNote(this.note).then( () => location.reload());
    }

    constructor(private editNoteService: EditNoteService) { }
}
