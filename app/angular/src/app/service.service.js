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
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/toPromise");
var ServiceService = (function () {
    function ServiceService(http) {
        this.http = http;
        this.serviceList = new Subject_1.Subject();
        this.serviceList$ = this.serviceList.asObservable();
        this.called = false;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
    }
    ServiceService.prototype.serviceUrl = function () {
        return '/api/service/all';
    };
    ServiceService.prototype.addServiceUrl = function () {
        return '/api/service/create';
    };
    ServiceService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.getServices().then(function (services) {
            _this.serviceList.next(services);
            _this.staticServiceList = services;
        });
    };
    ServiceService.prototype.getServices = function () {
        return this.http.get(this.serviceUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServiceService.prototype.addService = function (service) {
        return this.http.post(this.addServiceUrl(), service, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServiceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ServiceService;
}());
ServiceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ServiceService);
exports.ServiceService = ServiceService;
//# sourceMappingURL=service.service.js.map