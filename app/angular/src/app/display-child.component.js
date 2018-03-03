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
var child_1 = require("./child");
var DisplayChildComponent = (function () {
    function DisplayChildComponent() {
        this.entity = 'child';
        this.deleteModal = false;
        this.editModal = false;
        this.editTitle = 'Edit Child';
        this.visitModal = false;
    }
    DisplayChildComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    DisplayChildComponent.prototype.closeEditModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    };
    DisplayChildComponent.prototype.closeVisitModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
        }
    };
    DisplayChildComponent.prototype.onEdit = function (child) {
        this.editModal = false;
    };
    return DisplayChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", child_1.Child)
], DisplayChildComponent.prototype, "child", void 0);
DisplayChildComponent = __decorate([
    core_1.Component({
        selector: 'display-child',
        templateUrl: "./templates/display-child.component.html"
    }),
    __metadata("design:paramtypes", [])
], DisplayChildComponent);
exports.DisplayChildComponent = DisplayChildComponent;
//# sourceMappingURL=display-child.component.js.map