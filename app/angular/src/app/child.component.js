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
var child_1 = require("./child");
var complete_name_component_1 = require("./complete-name.component");
var ethnicity_service_1 = require("./ethnicity.service");
var child_service_1 = require("./child.service");
var ChildComponent = (function () {
    function ChildComponent(childService, ethnicityService) {
        this.childService = childService;
        this.ethnicityService = ethnicityService;
        this.title = 'Register A Child';
        this.onTerm = new core_1.EventEmitter();
        this.onSubmit = new core_1.EventEmitter();
        this.child = new child_1.Child();
        ethnicityService.init();
    }
    ChildComponent.prototype.completeChild = function (term) {
        var termVal = new complete_name_component_1.Term();
        termVal.term = term;
        termVal.type = 'child';
        this.onTerm.emit(termVal);
    };
    ChildComponent.prototype.submitChild = function () {
        var _this = this;
        if (this.familyId) {
            this.child.family_id = this.familyId;
        }
        this.childService.submitChild(this.child).then(function (child) {
            _this.onSubmit.next(child);
        });
    };
    ChildComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ethnicityList = this.ethnicityService.staticEthnicityList;
        this.ethnicityService.ethnicityList$.subscribe(function (ethnicities) {
            _this.ethnicityList = ethnicities;
        });
    };
    return ChildComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ChildComponent.prototype, "familyId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "title", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "onTerm", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "onSubmit", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "child", void 0);
ChildComponent = __decorate([
    core_1.Component({
        selector: 'child-edit',
        templateUrl: "./templates/child.component.html",
    }),
    __metadata("design:paramtypes", [child_service_1.ChildService,
        ethnicity_service_1.EthnicityService])
], ChildComponent);
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map