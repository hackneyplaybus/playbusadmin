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
var EthnicityService = (function () {
    function EthnicityService(http) {
        this.http = http;
        this.ethnicityList = new Subject_1.Subject();
        this.ethnicityList$ = this.ethnicityList.asObservable();
        this.called = false;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
    }
    EthnicityService.prototype.ethnicityUrl = function () {
        return '/api/ethnicitylist';
    };
    EthnicityService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.http.get(this.ethnicityUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (ethnicities) {
            _this.ethnicityList.next(ethnicities);
            _this.staticEthnicityList = ethnicities;
        })
            .catch(this.handleError);
    };
    EthnicityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return EthnicityService;
}());
EthnicityService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EthnicityService);
exports.EthnicityService = EthnicityService;
//# sourceMappingURL=ethnicity.service.js.map