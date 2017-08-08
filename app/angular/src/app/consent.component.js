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
var consent_1 = require("./consent");
var consent_service_1 = require("./consent.service");
var ConsentComponent = (function () {
    function ConsentComponent(route, router, consentService) {
        this.route = route;
        this.router = router;
        this.consentService = consentService;
        this.consent = new consent_1.Consent();
    }
    ConsentComponent.prototype.submitConsent = function () {
        var _this = this;
        this.consentService.updateConsent(this.consent).then(function () {
            _this.router.navigate(['/family', _this.familyId]);
        });
    };
    ConsentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .params
            .subscribe(function (params) {
            if (params['child_id']) {
                _this.consent.child_id = params['child_id'];
            }
            if (params['carer_id']) {
                _this.consent.carer_id = params['carer_id'];
            }
            _this.familyId = params['family_id'];
        });
    };
    return ConsentComponent;
}());
ConsentComponent = __decorate([
    core_1.Component({
        selector: 'consent-question',
        templateUrl: "./templates/consent.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        consent_service_1.ConsentService])
], ConsentComponent);
exports.ConsentComponent = ConsentComponent;
//# sourceMappingURL=consent.component.js.map