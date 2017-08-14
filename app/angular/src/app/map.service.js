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
var core_2 = require("@agm/core");
require("rxjs/add/operator/toPromise");
var FamilyService = (function () {
    function FamilyService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.options = new http_1.RequestOptions({ headers: this.headers, withCredentials: true });
    }
    FamilyService.prototype.apiKeyUrl = function () {
        return '/api/mapskey';
    };
    FamilyService.prototype.forRoot = function () {
        var _this = this;
        this.getAPIkey().then(function (key) { return _this.key = key.map_key; });
        return core_2.AgmCoreModule.forRoot({
            apiKey: this.key
        });
    };
    FamilyService.prototype.getAPIkey = function () {
        return this.http.get(this.apiKeyUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FamilyService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FamilyService;
}());
FamilyService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FamilyService);
exports.FamilyService = FamilyService;
var MapKey = (function () {
    function MapKey() {
    }
    return MapKey;
}());
exports.MapKey = MapKey;
//# sourceMappingURL=map.service.js.map