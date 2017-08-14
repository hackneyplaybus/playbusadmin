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
var PeopleComponent = (function () {
    function PeopleComponent(router) {
        this.router = router;
        this.tab = 'carer';
        this.activeTab = true;
        this.childTitle = "Register A Child";
        this.carerTitle = "Register A Carer";
    }
    PeopleComponent.prototype.onTerm = function (term) {
        this.term = term;
    };
    PeopleComponent.prototype.onChildSubmit = function (child) {
        this.router.navigate(['/consent', { child_id: child.child_id, family_id: child.family_id }]);
    };
    PeopleComponent.prototype.onCarerSubmit = function (carer) {
        this.router.navigate(['/consent', { carer_id: carer.carer_id, family_id: carer.family_id }]);
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    core_1.Component({
        selector: 'add-people',
        templateUrl: "./templates/people.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router])
], PeopleComponent);
exports.PeopleComponent = PeopleComponent;
//# sourceMappingURL=people.component.js.map