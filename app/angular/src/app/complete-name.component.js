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
var complete_name_service_1 = require("./complete-name.service");
var CompleteNameComponent = (function () {
    function CompleteNameComponent(completeNameService, router) {
        this.completeNameService = completeNameService;
        this.router = router;
    }
    Object.defineProperty(CompleteNameComponent.prototype, "term", {
        get: function () { return this._term; },
        set: function (term) {
            this._term = term;
            if (this._term && this._term.term != '' && this._term.type != '') {
                this.populate(this._term.type, this._term.term);
            }
            else {
                this.children = null;
                this.carers = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    CompleteNameComponent.prototype.goToFamily = function (familyId) {
        this.router.navigateByUrl('/family/' + familyId);
    };
    CompleteNameComponent.prototype.populate = function (type, term) {
        var _this = this;
        this.completeNameService.getPerson(type, term).then(function (persons) { return _this.updateChildCarer(persons); });
    };
    CompleteNameComponent.prototype.updateChildCarer = function (childCarer) {
        this.carers = childCarer.carers;
        this.children = childCarer.children;
    };
    return CompleteNameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Term),
    __metadata("design:paramtypes", [Term])
], CompleteNameComponent.prototype, "term", null);
CompleteNameComponent = __decorate([
    core_1.Component({
        selector: 'complete-name',
        templateUrl: "./templates/complete-name.component.html",
    }),
    __metadata("design:paramtypes", [complete_name_service_1.CompleteNameService,
        router_1.Router])
], CompleteNameComponent);
exports.CompleteNameComponent = CompleteNameComponent;
var Term = (function () {
    function Term() {
    }
    return Term;
}());
exports.Term = Term;
//# sourceMappingURL=complete-name.component.js.map