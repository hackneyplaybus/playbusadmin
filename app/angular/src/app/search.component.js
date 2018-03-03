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
var router_2 = require("@angular/router");
var search_service_1 = require("./search.service");
require("rxjs/add/operator/switchMap");
var SearchComponent = (function () {
    function SearchComponent(route, router, searchService) {
        this.route = route;
        this.router = router;
        this.searchService = searchService;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.term = params['term'];
            console.log(params);
            if (_this.term) {
                _this.searchService.doSearch(_this.term).then(function (persons) { return _this.updateChildCarer(persons); });
            }
        });
    };
    SearchComponent.prototype.search = function (term) {
        this.term = term;
        this.router.navigate(['/search'], { queryParams: { term: this.term } });
    };
    SearchComponent.prototype.updateChildCarer = function (childCarer) {
        this.carers = childCarer.carers;
        this.children = childCarer.children;
    };
    SearchComponent.prototype.goToFamily = function (familyId) {
        this.router.navigateByUrl('/family/' + familyId);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search-view',
        templateUrl: "./templates/search.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        search_service_1.SearchService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map