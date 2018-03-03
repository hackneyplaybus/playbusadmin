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
var location_1 = require("./location");
var location_service_1 = require("./location.service");
require("rxjs/add/operator/switchMap");
var LocationEditComponent = (function () {
    function LocationEditComponent(route, router, locationService) {
        this.route = route;
        this.router = router;
        this.locationService = locationService;
        this.onStopEditing = new core_1.EventEmitter();
        this._location = new location_1.Location();
        this.isEditing = false;
        this.deleteModal = false;
        this.entity = 'location';
    }
    Object.defineProperty(LocationEditComponent.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (val) {
            this._location = val;
            this.isEditing = this._location.location_id != undefined && this._location.location_id != '';
        },
        enumerable: true,
        configurable: true
    });
    LocationEditComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    LocationEditComponent.prototype.ngOnInit = function () {
    };
    LocationEditComponent.prototype.addLocation = function () {
        this.locationService.addLocation(this._location).then(function () { return location.reload(); });
    };
    LocationEditComponent.prototype.stopEditing = function () {
        this._location.location_id = '';
        this.location = this._location;
        this.onStopEditing.next(true);
    };
    return LocationEditComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", location_1.Location),
    __metadata("design:paramtypes", [location_1.Location])
], LocationEditComponent.prototype, "location", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], LocationEditComponent.prototype, "onStopEditing", void 0);
LocationEditComponent = __decorate([
    core_1.Component({
        selector: 'location-edit',
        templateUrl: "./templates/location-edit.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        location_service_1.LocationService])
], LocationEditComponent);
exports.LocationEditComponent = LocationEditComponent;
//# sourceMappingURL=location-edit.component.js.map