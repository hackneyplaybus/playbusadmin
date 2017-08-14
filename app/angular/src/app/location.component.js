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
var location_1 = require("./location");
var location_service_1 = require("./location.service");
var item_1 = require("./item");
require("rxjs/add/operator/switchMap");
var LocationComponent = (function () {
    function LocationComponent(route, router, locationService) {
        this.route = route;
        this.router = router;
        this.locationService = locationService;
        this.location = new location_1.Location();
        this.title = 'Locations';
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocations()
            .then(function (locations) {
            _this.locations = locations;
            _this.items = [];
            for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
                var location_2 = locations_1[_i];
                var item = new item_1.Item();
                item.value = location_2.name;
                item.id = location_2.location_id;
                item.type = 'location';
                _this.items.push(item);
            }
        });
    };
    LocationComponent.prototype.onStopEditing = function (val) {
        this.location.location_id = '';
    };
    LocationComponent.prototype.onItemSelect = function (item) {
        for (var _i = 0, _a = this.locations; _i < _a.length; _i++) {
            var location_3 = _a[_i];
            if (location_3.location_id == item.id) {
                this.location = __assign({}, location_3);
                break;
            }
        }
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    core_1.Component({
        selector: 'location-view',
        templateUrl: "./templates/location.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        location_service_1.LocationService])
], LocationComponent);
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=location.component.js.map