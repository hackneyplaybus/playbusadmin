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
var VisitListComponent = (function () {
    function VisitListComponent() {
        this.deleteModal = false;
        this.entity = 'visit';
    }
    VisitListComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    VisitListComponent.prototype.delete = function (visitId) {
        this.visitId = visitId;
        this.deleteModal = true;
    };
    return VisitListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], VisitListComponent.prototype, "visits", void 0);
VisitListComponent = __decorate([
    core_1.Component({
        selector: 'visit-list',
        templateUrl: "./templates/visit-list.component.html",
    }),
    __metadata("design:paramtypes", [])
], VisitListComponent);
exports.VisitListComponent = VisitListComponent;
//# sourceMappingURL=visit-list.component.js.map