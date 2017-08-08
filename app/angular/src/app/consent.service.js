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
require("rxjs/add/operator/toPromise");
var ConsentService = (function () {
    function ConsentService(http) {
        this.http = http;
        this.called = false;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
    }
    ConsentService.prototype.consentUrl = function (type) {
        return '/api/' + type + '/photoconsent';
    };
    ConsentService.prototype.updateConsent = function (consent) {
        return this.http.post(this.consentUrl((consent.child_id) ? 'child' : 'carer'), consent, this.options)
            .toPromise()
            .catch(this.handleError);
    };
    ConsentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ConsentService;
}());
ConsentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ConsentService);
exports.ConsentService = ConsentService;
//# sourceMappingURL=consent.service.js.map