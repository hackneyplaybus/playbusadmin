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
var carer_1 = require("./carer");
var DisplayCarerComponent = (function () {
    function DisplayCarerComponent() {
        this.entity = 'carer';
        this.deleteModal = false;
        this.editModal = false;
        this.editTitle = 'Edit Carer';
        this.visitModal = false;
    }
    DisplayCarerComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    DisplayCarerComponent.prototype.closeEditModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    };
    DisplayCarerComponent.prototype.closeVisitModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
        }
    };
    DisplayCarerComponent.prototype.onEdit = function (carer) {
        this.editModal = false;
    };
    return DisplayCarerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", carer_1.Carer)
], DisplayCarerComponent.prototype, "carer", void 0);
DisplayCarerComponent = __decorate([
    core_1.Component({
        selector: 'display-carer',
        templateUrl: "./templates/display-carer.component.html"
    }),
    __metadata("design:paramtypes", [])
], DisplayCarerComponent);
exports.DisplayCarerComponent = DisplayCarerComponent;
//# sourceMappingURL=display-carer.component.js.map