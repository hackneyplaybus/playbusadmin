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
var http_1 = require("@angular/http");
var delete_service_1 = require("./delete.service");
var DeleteComponent = (function () {
    function DeleteComponent(http, deleteService) {
        this.http = http;
        this.deleteService = deleteService;
        this.deleteModal = false;
        this.deleteModalEmitter = new core_1.EventEmitter();
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
    }
    DeleteComponent.prototype.callDelete = function () {
        this.deleteService.delete(this.entity, this.entityId);
    };
    DeleteComponent.prototype.closeModalOutside = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.closeModal();
        }
    };
    DeleteComponent.prototype.closeModal = function () {
        this.deleteModal = false;
        this.deleteModalEmitter.next(this.deleteModal);
    };
    return DeleteComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DeleteComponent.prototype, "deleteModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DeleteComponent.prototype, "entity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DeleteComponent.prototype, "entityId", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], DeleteComponent.prototype, "deleteModalEmitter", void 0);
DeleteComponent = __decorate([
    core_1.Component({
        selector: 'delete-confirm',
        template: "\n<div *ngIf=\"deleteModal\" (click)='closeModalOutside($event);' id=\"delete-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container w3-card-4 w3-center w3-text-teal w3-padding-16\">\n            <h3>Are you sure you want to delete?</h3>\n            <input class=\"w3-button w3-right w3-border\" type=\"submit\" value=\"No\" (click)=\"closeModal()\">\n            <input id='delete-btn' class=\"w3-button w3-left w3-border\" type=\"submit\" (click)='callDelete();' value=\"Yes\">\n        </div>\n    </div>\n</div>\n",
    }),
    __metadata("design:paramtypes", [http_1.Http, delete_service_1.DeleteService])
], DeleteComponent);
exports.DeleteComponent = DeleteComponent;
//# sourceMappingURL=delete.component.js.map