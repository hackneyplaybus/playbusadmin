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
var carer_1 = require("./carer");
var complete_name_component_1 = require("./complete-name.component");
var ethnicity_service_1 = require("./ethnicity.service");
var benefit_service_1 = require("./benefit.service");
var carer_service_1 = require("./carer.service");
var CarerComponent = (function () {
    function CarerComponent(router, carerService, ethnicityService, benefitService) {
        this.router = router;
        this.carerService = carerService;
        this.ethnicityService = ethnicityService;
        this.benefitService = benefitService;
        this.title = 'Register A Carer';
        this.onTerm = new core_1.EventEmitter();
        this.onSubmit = new core_1.EventEmitter();
        this.carer = new carer_1.Carer();
        ethnicityService.init();
        benefitService.init();
    }
    CarerComponent.prototype.completeCarer = function (term) {
        var termVal = new complete_name_component_1.Term();
        termVal.term = term;
        termVal.type = 'carer';
        this.onTerm.emit(termVal);
    };
    CarerComponent.prototype.submitCarer = function () {
        var _this = this;
        if (this.familyId) {
            this.carer.family_id = this.familyId;
        }
        this.carerService.submitCarer(this.carer).then(function (carer) {
            _this.onSubmit.next(carer);
        });
    };
    CarerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ethnicityList = this.ethnicityService.staticEthnicityList;
        this.ethnicityService.ethnicityList$.subscribe(function (ethnicities) {
            _this.ethnicityList = ethnicities;
        });
        this.benefitList = this.benefitService.staticBenefitList;
        this.benefitService.benefitList$.subscribe(function (benefits) {
            _this.benefitList = benefits;
        });
    };
    return CarerComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], CarerComponent.prototype, "familyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "onTerm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "onSubmit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "carer", void 0);
CarerComponent = __decorate([
    core_1.Component({
        selector: 'carer-edit',
        templateUrl: "./templates/carer.component.html",
    }),
    __metadata("design:paramtypes", [router_1.Router,
        carer_service_1.CarerService,
        ethnicity_service_1.EthnicityService,
        benefit_service_1.BenefitService])
], CarerComponent);
exports.CarerComponent = CarerComponent;
//# sourceMappingURL=carer.component.js.map