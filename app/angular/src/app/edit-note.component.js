"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var edit_note_service_1 = require("./edit-note.service");
var note_1 = require("./note");
var EditNoteComponent = (function () {
    function EditNoteComponent(editNoteService) {
        this.editNoteService = editNoteService;
        this.note = new note_1.Note();
    }
    EditNoteComponent.prototype.submitNote = function () {
        this.note.family_id = this.family_id;
        this.editNoteService.submitNote(this.note).then(function () { return location.reload(); });
    };
    return EditNoteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], EditNoteComponent.prototype, "family_id", void 0);
EditNoteComponent = __decorate([
    core_1.Component({
        selector: 'edit-note',
        template: "\n<div class=\"w3-row\">\n    <form id='note-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">        \n        <h2 class=\"w3-center w3-text-teal\">Add a Note</h2>          \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-sticky-note\"></i></div>\n                <div class=\"w3-rest\">\n                    <textarea #noteTextBox (change)='note.note = (noteTextBox.value);' class=\"w3-input w3-border w3-round-medium\" rows=\"5\" name=\"note-text\"  id=\"note-text\" required></textarea>\n                </div>\n            </div>        \n        <input (click)='submitNote();$event.preventDefault();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Submit\">\n    </form>    \n</div>\n",
    }),
    __metadata("design:paramtypes", [edit_note_service_1.EditNoteService])
], EditNoteComponent);
exports.EditNoteComponent = EditNoteComponent;
//# sourceMappingURL=edit-note.component.js.map