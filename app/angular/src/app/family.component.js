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
var family_service_1 = require("./family.service");
var family_1 = require("./family");
var router_2 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var FamilyComponent = (function () {
    function FamilyComponent(familyService, route, router) {
        this.familyService = familyService;
        this.route = route;
        this.router = router;
        this.family = new family_1.Family();
        this.family_id = 'cruft';
        this.referralModal = false;
        this.childModal = false;
        this.deleteModal = false;
        this.carerModal = false;
        this.noteModal = false;
        this.locationModal = false;
        this.visitModal = false;
        this.childVisitModal = false;
        this.projectModal = false;
    }
    FamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            _this.family_id = params.get('familyId');
            return _this.familyService.getFamily(_this.family_id);
        })
            .subscribe(function (family) { return _this.family = family; });
    };
    FamilyComponent.prototype.closeModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.referralModal = false;
            this.childModal = false;
            this.deleteModal = false;
            this.carerModal = false;
            this.noteModal = false;
            this.locationModal = false;
            this.visitModal = false;
            this.childVisitModal = false;
            this.projectModal = false;
        }
    };
    FamilyComponent.prototype.onChildSubmit = function (child) {
        this.router.navigate(['/consent', { child_id: child.child_id, family_id: child.family_id }]);
    };
    FamilyComponent.prototype.onCarerSubmit = function (carer) {
        this.router.navigate(['/consent', { carer_id: carer.carer_id, family_id: carer.family_id }]);
    };
    return FamilyComponent;
}());
FamilyComponent = __decorate([
    core_1.Component({
        selector: 'family-view',
        templateUrl: "./templates/family.component.html",
    }),
    __metadata("design:paramtypes", [family_service_1.FamilyService,
        router_1.ActivatedRoute,
        router_2.Router])
], FamilyComponent);
exports.FamilyComponent = FamilyComponent;
//# sourceMappingURL=family.component.js.map