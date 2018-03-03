"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var router_2 = require("@angular/router");
var service_1 = require("./service");
var service_service_1 = require("./service.service");
var item_1 = require("./item");
require("rxjs/add/operator/switchMap");
var ServiceComponent = (function () {
    function ServiceComponent(route, router, serviceService) {
        this.route = route;
        this.router = router;
        this.serviceService = serviceService;
        this.service = new service_1.Service();
        this.title = 'Services';
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getServices()
            .then(function (services) {
            _this.services = services;
            _this.items = [];
            for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                var service = services_1[_i];
                var item = new item_1.Item();
                item.value = service.name;
                item.id = service.service_id;
                item.type = 'service';
                _this.items.push(item);
            }
        });
    };
    ServiceComponent.prototype.onStopEditing = function (val) {
        this.service.service_id = '';
    };
    ServiceComponent.prototype.onItemSelect = function (item) {
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var service = _a[_i];
            if (service.service_id == item.id) {
                this.service = __assign({}, service);
                break;
            }
        }
    };
    return ServiceComponent;
}());
ServiceComponent = __decorate([
    core_1.Component({
        selector: 'service-view',
        templateUrl: "./templates/service.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        service_service_1.ServiceService])
], ServiceComponent);
exports.ServiceComponent = ServiceComponent;
//# sourceMappingURL=service.component.js.map