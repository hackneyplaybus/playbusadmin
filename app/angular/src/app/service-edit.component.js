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
var router_1 = require("@angular/router");
var service_1 = require("./service");
var service_service_1 = require("./service.service");
require("rxjs/add/operator/switchMap");
var ServiceEditComponent = (function () {
    function ServiceEditComponent(route, router, serviceService) {
        this.route = route;
        this.router = router;
        this.serviceService = serviceService;
        this.onStopEditing = new core_1.EventEmitter();
        this._service = new service_1.Service();
        this.isEditing = false;
        this.deleteModal = false;
        this.entity = 'service';
    }
    Object.defineProperty(ServiceEditComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (val) {
            this._service = val;
            this.isEditing = this._service.service_id != undefined && this._service.service_id != '';
        },
        enumerable: true,
        configurable: true
    });
    ServiceEditComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    ServiceEditComponent.prototype.ngOnInit = function () {
    };
    ServiceEditComponent.prototype.addService = function () {
        this.serviceService.addService(this._service).then(function () { return location.reload(); });
    };
    ServiceEditComponent.prototype.stopEditing = function () {
        this._service.service_id = '';
        this.service = this._service;
        this.onStopEditing.next(true);
    };
    return ServiceEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", service_1.Service),
    __metadata("design:paramtypes", [service_1.Service])
], ServiceEditComponent.prototype, "service", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ServiceEditComponent.prototype, "onStopEditing", void 0);
ServiceEditComponent = __decorate([
    core_1.Component({
        selector: 'service-edit',
        templateUrl: "./templates/service-edit.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        service_service_1.ServiceService])
], ServiceEditComponent);
exports.ServiceEditComponent = ServiceEditComponent;
//# sourceMappingURL=service-edit.component.js.map