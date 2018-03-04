webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_component__ = __webpack_require__("../../../../../src/app/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consent_component__ = __webpack_require__("../../../../../src/app/consent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__family_component__ = __webpack_require__("../../../../../src/app/family.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_component__ = __webpack_require__("../../../../../src/app/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_component__ = __webpack_require__("../../../../../src/app/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__people_component__["a" /* PeopleComponent */] },
    { path: 'consent', component: __WEBPACK_IMPORTED_MODULE_3__consent_component__["a" /* ConsentComponent */] },
    { path: 'family/:familyId', component: __WEBPACK_IMPORTED_MODULE_4__family_component__["a" /* FamilyComponent */] },
    { path: 'locations', component: __WEBPACK_IMPORTED_MODULE_5__location_component__["a" /* LocationComponent */] },
    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_6__project_component__["a" /* ProjectComponent */] },
    { path: 'services', component: __WEBPACK_IMPORTED_MODULE_7__service_component__["a" /* ServiceComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_8__search_component__["a" /* SearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Used to monitor the window size to display sidebar
    function AppComponent(ngZone, router) {
        this.ngZone = ngZone;
        this.router = router;
        this.show = false;
        this.width = window.innerWidth;
        //height: number = 0;
        this.leftMargin = '0px';
    }
    AppComponent.prototype.toggle = function () {
        this.show = !this.show;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.onresize = function (e) {
            _this.ngZone.run(function () {
                _this.width = window.innerWidth;
                //this.height = window.innerHeight;
            });
        };
    };
    AppComponent.prototype.onSearch = function (term) {
        this.router.navigate(['/search'], { queryParams: { term: term } });
    };
    AppComponent.prototype.showSidebar = function () {
        if (this.width > 933) {
            this.show = false;
            this.leftMargin = '150px';
            return true;
        }
        this.leftMargin = '0px';
        return false;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'playbus-app',
        template: __webpack_require__("../../../../../src/app/templates/app.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__ = __webpack_require__("../../../../@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__child_component__ = __webpack_require__("../../../../../src/app/child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__carer_component__ = __webpack_require__("../../../../../src/app/carer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__people_component__ = __webpack_require__("../../../../../src/app/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__complete_name_service__ = __webpack_require__("../../../../../src/app/complete-name.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ethnicity_service__ = __webpack_require__("../../../../../src/app/ethnicity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__benefit_service__ = __webpack_require__("../../../../../src/app/benefit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__carer_service__ = __webpack_require__("../../../../../src/app/carer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__child_service__ = __webpack_require__("../../../../../src/app/child.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__complete_name_component__ = __webpack_require__("../../../../../src/app/complete-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__consent_component__ = __webpack_require__("../../../../../src/app/consent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__family_component__ = __webpack_require__("../../../../../src/app/family.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__display_carer_component__ = __webpack_require__("../../../../../src/app/display-carer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__display_child_component__ = __webpack_require__("../../../../../src/app/display-child.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__delete_component__ = __webpack_require__("../../../../../src/app/delete.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__consent_service__ = __webpack_require__("../../../../../src/app/consent.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__family_service__ = __webpack_require__("../../../../../src/app/family.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__delete_service__ = __webpack_require__("../../../../../src/app/delete.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__edit_note_service__ = __webpack_require__("../../../../../src/app/edit-note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__edit_note_component__ = __webpack_require__("../../../../../src/app/edit-note.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__visit_component__ = __webpack_require__("../../../../../src/app/visit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__visit_service__ = __webpack_require__("../../../../../src/app/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__location_component__ = __webpack_require__("../../../../../src/app/location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__location_edit_component__ = __webpack_require__("../../../../../src/app/location-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__project_component__ = __webpack_require__("../../../../../src/app/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__project_edit_component__ = __webpack_require__("../../../../../src/app/project-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__service_service__ = __webpack_require__("../../../../../src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__service_component__ = __webpack_require__("../../../../../src/app/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__search_component__ = __webpack_require__("../../../../../src/app/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__service_edit_component__ = __webpack_require__("../../../../../src/app/service-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__list_component__ = __webpack_require__("../../../../../src/app/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__visit_list_component__ = __webpack_require__("../../../../../src/app/visit-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__referral_service__ = __webpack_require__("../../../../../src/app/referral.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_19__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyA4ktXx-suNdhB-3Ithks2pWCgo6fvSbio'
            }),
            __WEBPACK_IMPORTED_MODULE_6__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__child_component__["a" /* ChildComponent */],
            __WEBPACK_IMPORTED_MODULE_10__people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_9__carer_component__["a" /* CarerComponent */],
            __WEBPACK_IMPORTED_MODULE_18__complete_name_component__["a" /* CompleteNameComponent */],
            __WEBPACK_IMPORTED_MODULE_20__consent_component__["a" /* ConsentComponent */],
            __WEBPACK_IMPORTED_MODULE_21__family_component__["a" /* FamilyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__display_carer_component__["a" /* DisplayCarerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__display_child_component__["a" /* DisplayChildComponent */],
            __WEBPACK_IMPORTED_MODULE_24__delete_component__["a" /* DeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_29__edit_note_component__["a" /* EditNoteComponent */],
            __WEBPACK_IMPORTED_MODULE_30__visit_component__["a" /* VisitComponent */],
            __WEBPACK_IMPORTED_MODULE_32__location_component__["a" /* LocationComponent */],
            __WEBPACK_IMPORTED_MODULE_33__location_edit_component__["a" /* LocationEditComponent */],
            __WEBPACK_IMPORTED_MODULE_40__list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_34__project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_35__project_edit_component__["a" /* ProjectEditComponent */],
            __WEBPACK_IMPORTED_MODULE_38__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_37__service_component__["a" /* ServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_39__service_edit_component__["a" /* ServiceEditComponent */],
            __WEBPACK_IMPORTED_MODULE_41__visit_list_component__["a" /* VisitListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__complete_name_service__["a" /* CompleteNameService */],
            __WEBPACK_IMPORTED_MODULE_12__ethnicity_service__["a" /* EthnicityService */],
            __WEBPACK_IMPORTED_MODULE_13__location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_14__project_service__["a" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_15__benefit_service__["a" /* BenefitService */],
            __WEBPACK_IMPORTED_MODULE_16__carer_service__["a" /* CarerService */],
            __WEBPACK_IMPORTED_MODULE_17__child_service__["a" /* ChildService */],
            __WEBPACK_IMPORTED_MODULE_25__consent_service__["a" /* ConsentService */],
            __WEBPACK_IMPORTED_MODULE_26__family_service__["a" /* FamilyService */],
            __WEBPACK_IMPORTED_MODULE_27__delete_service__["a" /* DeleteService */],
            __WEBPACK_IMPORTED_MODULE_28__edit_note_service__["a" /* EditNoteService */],
            __WEBPACK_IMPORTED_MODULE_31__visit_service__["a" /* VisitService */],
            __WEBPACK_IMPORTED_MODULE_36__service_service__["a" /* ServiceService */],
            __WEBPACK_IMPORTED_MODULE_42__referral_service__["a" /* ReferralService */],
            __WEBPACK_IMPORTED_MODULE_43__search_service__["a" /* SearchService */],
            __WEBPACK_IMPORTED_MODULE_5__agm_core__["b" /* GoogleMapsAPIWrapper */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/benefit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BenefitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BenefitService = (function () {
    function BenefitService(http) {
        this.http = http;
        this.benefitList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.benefitList$ = this.benefitList.asObservable();
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    BenefitService.prototype.benefitUrl = function () {
        return '/api/benefitlist';
    };
    BenefitService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.http.get(this.benefitUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (ethnicities) {
            _this.benefitList.next(ethnicities);
            _this.staticBenefitList = ethnicities;
        })
            .catch(this.handleError);
    };
    BenefitService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return BenefitService;
}());
BenefitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BenefitService);

var _a;
//# sourceMappingURL=benefit.service.js.map

/***/ }),

/***/ "../../../../../src/app/carer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carer__ = __webpack_require__("../../../../../src/app/carer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__complete_name_component__ = __webpack_require__("../../../../../src/app/complete-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ethnicity_service__ = __webpack_require__("../../../../../src/app/ethnicity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__benefit_service__ = __webpack_require__("../../../../../src/app/benefit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carer_service__ = __webpack_require__("../../../../../src/app/carer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarerComponent = (function () {
    function CarerComponent(router, carerService, ethnicityService, benefitService) {
        this.router = router;
        this.carerService = carerService;
        this.ethnicityService = ethnicityService;
        this.benefitService = benefitService;
        this.title = 'Register A Carer';
        this.onTerm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.carer = new __WEBPACK_IMPORTED_MODULE_2__carer__["a" /* Carer */]();
        ethnicityService.init();
        benefitService.init();
    }
    CarerComponent.prototype.completeCarer = function (term) {
        var termVal = new __WEBPACK_IMPORTED_MODULE_3__complete_name_component__["b" /* Term */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], CarerComponent.prototype, "familyId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "onTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "onSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], CarerComponent.prototype, "carer", void 0);
CarerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'carer-edit',
        template: __webpack_require__("../../../../../src/app/templates/carer.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__carer_service__["a" /* CarerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__carer_service__["a" /* CarerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ethnicity_service__["a" /* EthnicityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ethnicity_service__["a" /* EthnicityService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__benefit_service__["a" /* BenefitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__benefit_service__["a" /* BenefitService */]) === "function" && _d || Object])
], CarerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=carer.component.js.map

/***/ }),

/***/ "../../../../../src/app/carer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarerService = (function () {
    function CarerService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    CarerService.prototype.carerUrl = function () {
        return '/api/carer/create';
    };
    CarerService.prototype.submitCarer = function (carer) {
        return this.http.post(this.carerUrl(), carer, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CarerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CarerService;
}());
CarerService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CarerService);

var _a;
//# sourceMappingURL=carer.service.js.map

/***/ }),

/***/ "../../../../../src/app/carer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Carer; });
var Carer = (function () {
    function Carer() {
    }
    return Carer;
}());

//# sourceMappingURL=carer.js.map

/***/ }),

/***/ "../../../../../src/app/child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child__ = __webpack_require__("../../../../../src/app/child.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_name_component__ = __webpack_require__("../../../../../src/app/complete-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ethnicity_service__ = __webpack_require__("../../../../../src/app/ethnicity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__child_service__ = __webpack_require__("../../../../../src/app/child.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChildComponent = (function () {
    function ChildComponent(childService, ethnicityService) {
        this.childService = childService;
        this.ethnicityService = ethnicityService;
        this.title = 'Register A Child';
        this.onTerm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.onSubmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.child = new __WEBPACK_IMPORTED_MODULE_1__child__["a" /* Child */]();
        ethnicityService.init();
    }
    ChildComponent.prototype.completeChild = function (term) {
        var termVal = new __WEBPACK_IMPORTED_MODULE_2__complete_name_component__["b" /* Term */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], ChildComponent.prototype, "familyId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "onTerm", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "onSubmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ChildComponent.prototype, "child", void 0);
ChildComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'child-edit',
        template: __webpack_require__("../../../../../src/app/templates/child.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__child_service__["a" /* ChildService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__child_service__["a" /* ChildService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ethnicity_service__["a" /* EthnicityService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ethnicity_service__["a" /* EthnicityService */]) === "function" && _b || Object])
], ChildComponent);

var _a, _b;
//# sourceMappingURL=child.component.js.map

/***/ }),

/***/ "../../../../../src/app/child.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChildService = (function () {
    function ChildService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ChildService.prototype.childUrl = function () {
        return '/api/child';
    };
    ChildService.prototype.submitChild = function (child) {
        return this.http.post(this.childUrl() + "/create", child, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChildService.prototype.getFamilyChildren = function (familyId) {
        return this.http.get(this.childUrl() + "", this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ChildService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ChildService;
}());
ChildService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ChildService);

var _a;
//# sourceMappingURL=child.service.js.map

/***/ }),

/***/ "../../../../../src/app/child.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Child; });
var Child = (function () {
    function Child() {
    }
    return Child;
}());

//# sourceMappingURL=child.js.map

/***/ }),

/***/ "../../../../../src/app/complete-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__complete_name_service__ = __webpack_require__("../../../../../src/app/complete-name.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteNameComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Term; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Term),
    __metadata("design:paramtypes", [Term])
], CompleteNameComponent.prototype, "term", null);
CompleteNameComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'complete-name',
        template: __webpack_require__("../../../../../src/app/templates/complete-name.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__complete_name_service__["a" /* CompleteNameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__complete_name_service__["a" /* CompleteNameService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CompleteNameComponent);

var Term = (function () {
    function Term() {
    }
    return Term;
}());

var _a, _b;
//# sourceMappingURL=complete-name.component.js.map

/***/ }),

/***/ "../../../../../src/app/complete-name.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompleteNameService; });
/* unused harmony export ChildCarer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompleteNameService = (function () {
    function CompleteNameService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    CompleteNameService.prototype.autocompleteUrl = function (type, term) {
        return '/api/' + type + '/autocomplete?term=' + term;
    };
    CompleteNameService.prototype.getPerson = function (type, term) {
        return this.http.get(this.autocompleteUrl(type, term), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CompleteNameService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CompleteNameService;
}());
CompleteNameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CompleteNameService);

var ChildCarer = (function () {
    function ChildCarer() {
    }
    return ChildCarer;
}());

var _a;
//# sourceMappingURL=complete-name.service.js.map

/***/ }),

/***/ "../../../../../src/app/consent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__consent__ = __webpack_require__("../../../../../src/app/consent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__consent_service__ = __webpack_require__("../../../../../src/app/consent.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConsentComponent = (function () {
    function ConsentComponent(route, router, consentService) {
        this.route = route;
        this.router = router;
        this.consentService = consentService;
        this.consent = new __WEBPACK_IMPORTED_MODULE_2__consent__["a" /* Consent */]();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'consent-question',
        template: __webpack_require__("../../../../../src/app/templates/consent.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__consent_service__["a" /* ConsentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__consent_service__["a" /* ConsentService */]) === "function" && _c || Object])
], ConsentComponent);

var _a, _b, _c;
//# sourceMappingURL=consent.component.js.map

/***/ }),

/***/ "../../../../../src/app/consent.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConsentService = (function () {
    function ConsentService(http) {
        this.http = http;
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ConsentService.prototype.consentUrl = function (type) {
        return '/api/' + type + '/photoconsent';
    };
    ConsentService.prototype.updateConsent = function (consent) {
        return this.http.post(this.consentUrl((consent.child_id) ? 'child' : 'carer'), consent, this.options)
            .toPromise()
            .catch(this.handleError);
    };
    ConsentService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ConsentService;
}());
ConsentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ConsentService);

var _a;
//# sourceMappingURL=consent.service.js.map

/***/ }),

/***/ "../../../../../src/app/consent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consent; });
var Consent = (function () {
    function Consent() {
    }
    return Consent;
}());

//# sourceMappingURL=consent.js.map

/***/ }),

/***/ "../../../../../src/app/delete.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__delete_service__ = __webpack_require__("../../../../../src/app/delete.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteComponent = (function () {
    function DeleteComponent(http, deleteService) {
        this.http = http;
        this.deleteService = deleteService;
        this.deleteModal = false;
        this.deleteModalEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    DeleteComponent.prototype.callDelete = function () {
        this.deleteService.delete(this.entity, this.entityId);
    };
    DeleteComponent.prototype.closeModalOutside = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.closeModal();
        }
    };
    DeleteComponent.prototype.closeModal = function () {
        this.deleteModal = false;
        this.deleteModalEmitter.next(this.deleteModal);
    };
    return DeleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], DeleteComponent.prototype, "deleteModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], DeleteComponent.prototype, "entity", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], DeleteComponent.prototype, "entityId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]) === "function" && _a || Object)
], DeleteComponent.prototype, "deleteModalEmitter", void 0);
DeleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'delete-confirm',
        template: "\n<div *ngIf=\"deleteModal\" (click)='closeModalOutside($event);' id=\"delete-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container w3-card-4 w3-center w3-text-teal w3-padding-16\">\n            <h3>Are you sure you want to delete?</h3>\n            <input class=\"w3-button w3-right w3-border\" type=\"submit\" value=\"No\" (click)=\"closeModal()\">\n            <input id='delete-btn' class=\"w3-button w3-left w3-border\" type=\"submit\" (click)='callDelete();' value=\"Yes\">\n        </div>\n    </div>\n</div>\n",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__delete_service__["a" /* DeleteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__delete_service__["a" /* DeleteService */]) === "function" && _c || Object])
], DeleteComponent);

var _a, _b, _c;
//# sourceMappingURL=delete.component.js.map

/***/ }),

/***/ "../../../../../src/app/delete.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeleteService = (function () {
    function DeleteService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    DeleteService.prototype.deleteUrl = function (entity, entityId) {
        return '/api/' + entity + '?id=' + entityId;
    };
    DeleteService.prototype.delete = function (entity, entityId) {
        this.http.delete(this.deleteUrl(entity, entityId), this.options)
            .toPromise()
            .then(function () {
            location.reload();
        })
            .catch(this.handleError);
    };
    DeleteService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return DeleteService;
}());
DeleteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], DeleteService);

var _a;
//# sourceMappingURL=delete.service.js.map

/***/ }),

/***/ "../../../../../src/app/display-carer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carer__ = __webpack_require__("../../../../../src/app/carer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayCarerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayCarerComponent = (function () {
    function DisplayCarerComponent() {
        this.entity = 'carer';
        this.deleteModal = false;
        this.editModal = false;
        this.editTitle = 'Edit Carer';
        this.visitModal = false;
    }
    DisplayCarerComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    DisplayCarerComponent.prototype.closeEditModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    };
    DisplayCarerComponent.prototype.closeVisitModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
        }
    };
    DisplayCarerComponent.prototype.onEdit = function (carer) {
        this.editModal = false;
    };
    return DisplayCarerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__carer__["a" /* Carer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__carer__["a" /* Carer */]) === "function" && _a || Object)
], DisplayCarerComponent.prototype, "carer", void 0);
DisplayCarerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'display-carer',
        template: __webpack_require__("../../../../../src/app/templates/display-carer.component.html")
    })
], DisplayCarerComponent);

var _a;
//# sourceMappingURL=display-carer.component.js.map

/***/ }),

/***/ "../../../../../src/app/display-child.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__child__ = __webpack_require__("../../../../../src/app/child.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisplayChildComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayChildComponent = (function () {
    function DisplayChildComponent() {
        this.entity = 'child';
        this.deleteModal = false;
        this.editModal = false;
        this.editTitle = 'Edit Child';
        this.visitModal = false;
    }
    DisplayChildComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    DisplayChildComponent.prototype.closeEditModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.editModal = false;
        }
    };
    DisplayChildComponent.prototype.closeVisitModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
        }
    };
    DisplayChildComponent.prototype.onEdit = function (child) {
        this.editModal = false;
    };
    return DisplayChildComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__child__["a" /* Child */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__child__["a" /* Child */]) === "function" && _a || Object)
], DisplayChildComponent.prototype, "child", void 0);
DisplayChildComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'display-child',
        template: __webpack_require__("../../../../../src/app/templates/display-child.component.html")
    })
], DisplayChildComponent);

var _a;
//# sourceMappingURL=display-child.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-note.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_note_service__ = __webpack_require__("../../../../../src/app/edit-note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__note__ = __webpack_require__("../../../../../src/app/note.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditNoteComponent = (function () {
    function EditNoteComponent(editNoteService) {
        this.editNoteService = editNoteService;
        this.note = new __WEBPACK_IMPORTED_MODULE_2__note__["a" /* Note */]();
    }
    EditNoteComponent.prototype.submitNote = function () {
        this.note.family_id = this.family_id;
        this.editNoteService.submitNote(this.note).then(function () { return location.reload(); });
    };
    return EditNoteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], EditNoteComponent.prototype, "family_id", void 0);
EditNoteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'edit-note',
        template: "\n<div class=\"w3-row\">\n    <form id='note-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">        \n        <h2 class=\"w3-center w3-text-teal\">Add a Note</h2>          \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-sticky-note\"></i></div>\n                <div class=\"w3-rest\">\n                    <textarea #noteTextBox (change)='note.note = (noteTextBox.value);' class=\"w3-input w3-border w3-round-medium\" rows=\"5\" name=\"note-text\"  id=\"note-text\" required></textarea>\n                </div>\n            </div>        \n        <input (click)='submitNote();$event.preventDefault();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Submit\">\n    </form>    \n</div>\n",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_note_service__["a" /* EditNoteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_note_service__["a" /* EditNoteService */]) === "function" && _a || Object])
], EditNoteComponent);

var _a;
//# sourceMappingURL=edit-note.component.js.map

/***/ }),

/***/ "../../../../../src/app/edit-note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditNoteService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditNoteService = (function () {
    function EditNoteService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    EditNoteService.prototype.noteUrl = function () {
        return '/api/note/create';
    };
    EditNoteService.prototype.submitNote = function (note) {
        return this.http.post(this.noteUrl(), note, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    EditNoteService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return EditNoteService;
}());
EditNoteService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], EditNoteService);

var _a;
//# sourceMappingURL=edit-note.service.js.map

/***/ }),

/***/ "../../../../../src/app/ethnicity.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthnicityService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EthnicityService = (function () {
    function EthnicityService(http) {
        this.http = http;
        this.ethnicityList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.ethnicityList$ = this.ethnicityList.asObservable();
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    EthnicityService.prototype.ethnicityUrl = function () {
        return '/api/ethnicitylist';
    };
    EthnicityService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.http.get(this.ethnicityUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .then(function (ethnicities) {
            _this.ethnicityList.next(ethnicities);
            _this.staticEthnicityList = ethnicities;
        })
            .catch(this.handleError);
    };
    EthnicityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return EthnicityService;
}());
EthnicityService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], EthnicityService);

var _a;
//# sourceMappingURL=ethnicity.service.js.map

/***/ }),

/***/ "../../../../../src/app/family.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__family_service__ = __webpack_require__("../../../../../src/app/family.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__("../../../../../src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__referral_service__ = __webpack_require__("../../../../../src/app/referral.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__family__ = __webpack_require__("../../../../../src/app/family.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FamilyComponent = (function () {
    function FamilyComponent(familyService, serviceService, route, router, referralService, mapsApi, mapsLoader) {
        this.familyService = familyService;
        this.serviceService = serviceService;
        this.route = route;
        this.router = router;
        this.referralService = referralService;
        this.mapsApi = mapsApi;
        this.mapsLoader = mapsLoader;
        this.family = new __WEBPACK_IMPORTED_MODULE_6__family__["a" /* Family */]();
        this.family_id = 'cruft';
        this.referralModal = false;
        this.referralDelete = false;
        this.childModal = false;
        this.deleteModal = false;
        this.carerModal = false;
        this.noteModal = false;
        this.locationModal = false;
        this.visitModal = false;
        this.childVisitModal = false;
        this.projectModal = false;
        this.services = [];
        this.referralEntity = 'referral';
        this.referralId = '';
        this.lat = 51.5484201;
        this.lng = -0.0741668;
    }
    FamilyComponent.prototype.closeDeleteModal = function (event) {
        this.referralDelete = false;
    };
    FamilyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mapsLoader.load().then(function () {
            _this.route.paramMap
                .switchMap(function (params) {
                _this.family_id = params.get('familyId');
                return _this.familyService.getFamily(_this.family_id);
            })
                .subscribe(function (family) { return _this.family = family; });
            _this.serviceService.getServices().then(function (services) { return _this.services = services; });
        });
    };
    FamilyComponent.prototype.addService = function (serviceId) {
        var _this = this;
        this.referralService.addReferral(this.family_id, serviceId).then(function (referral) {
            if (!_this.family.referrals) {
                _this.family.referrals = [];
            }
            _this.family.referrals.push(referral);
            _this.referralModal = false;
        });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'family-view',
        template: __webpack_require__("../../../../../src/app/templates/family.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__family_service__["a" /* FamilyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__family_service__["a" /* FamilyService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* ServiceService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__referral_service__["a" /* ReferralService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__referral_service__["a" /* ReferralService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["b" /* GoogleMapsAPIWrapper */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__agm_core__["c" /* MapsAPILoader */]) === "function" && _g || Object])
], FamilyComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=family.component.js.map

/***/ }),

/***/ "../../../../../src/app/family.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FamilyService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FamilyService = (function () {
    function FamilyService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    FamilyService.prototype.familyUrl = function (familyId) {
        return '/api/family/all?familyId=' + familyId;
    };
    FamilyService.prototype.getFamily = function (familyId) {
        return this.http.get(this.familyUrl(familyId), this.options)
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], FamilyService);

var _a;
//# sourceMappingURL=family.service.js.map

/***/ }),

/***/ "../../../../../src/app/family.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Family; });
var Family = (function () {
    function Family() {
    }
    return Family;
}());

//# sourceMappingURL=family.js.map

/***/ }),

/***/ "../../../../../src/app/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(route, router) {
        this.route = route;
        this.router = router;
        this.onItemSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.editItem = function (item) {
        this.onItemSelect.next(item);
    };
    return ListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], ListComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], ListComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "onItemSelect", void 0);
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'list-view',
        template: __webpack_require__("../../../../../src/app/templates/list.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/location-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__("../../../../../src/app/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LocationEditComponent = (function () {
    function LocationEditComponent(route, router, locationService, mapsAPILoader) {
        this.route = route;
        this.router = router;
        this.locationService = locationService;
        this.mapsAPILoader = mapsAPILoader;
        this.onStopEditing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._location = new __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]();
        this.isEditing = false;
        this.deleteModal = false;
        this.entity = 'location';
        this.lat = 51.5484201;
        this.lng = -0.0741668;
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
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            console.log('google script loaded');
            _this.geocoder = new google.maps.Geocoder();
        });
    };
    LocationEditComponent.prototype.mapClicked = function ($event) {
        var _this = this;
        this._location.latitude = $event.coords.lat;
        this._location.longitude = $event.coords.lng;
        this._location.address = '';
        this._location.city = '';
        this._location.address = '';
        this.geocoder.geocode({ 'location': $event.coords }, function (results, status) {
            if (status === 'OK') {
                if (results[1]) {
                    var comp = results[0].address_components;
                    for (var ii = 0; ii < comp.length; ++ii) {
                        if (comp[ii].types[0] == 'postal_code') {
                            _this._location.postal_code = comp[ii].long_name;
                        }
                        if (comp[ii].types[0] == 'postal_town') {
                            _this._location.city = comp[ii].long_name;
                        }
                        if (comp[ii].types[0] == 'route') {
                            _this._location.address = comp[ii].long_name;
                        }
                    }
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
        });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]) === "function" && _b || Object])
], LocationEditComponent.prototype, "location", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], LocationEditComponent.prototype, "onStopEditing", void 0);
LocationEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'location-edit',
        template: __webpack_require__("../../../../../src/app/templates/location-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__agm_core__["c" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__agm_core__["c" /* MapsAPILoader */]) === "function" && _f || Object])
], LocationEditComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=location-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__("../../../../../src/app/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item__ = __webpack_require__("../../../../../src/app/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationComponent; });
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







var LocationComponent = (function () {
    function LocationComponent(route, router, locationService) {
        this.route = route;
        this.router = router;
        this.locationService = locationService;
        this.location = new __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]();
        this.title = 'Locations';
    }
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationService.getLocations()
            .then(function (locations) {
            _this.locations = locations;
            _this.items = [];
            for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
                var location = locations_1[_i];
                var item = new __WEBPACK_IMPORTED_MODULE_4__item__["a" /* Item */]();
                item.value = location.name;
                item.id = location.location_id;
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
            var location = _a[_i];
            if (location.location_id == item.id) {
                this.location = __assign({}, location);
                break;
            }
        }
    };
    return LocationComponent;
}());
LocationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'location-view',
        template: __webpack_require__("../../../../../src/app/templates/location.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__location_service__["a" /* LocationService */]) === "function" && _c || Object])
], LocationComponent);

var _a, _b, _c;
//# sourceMappingURL=location.component.js.map

/***/ }),

/***/ "../../../../../src/app/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocationService = (function () {
    function LocationService(http) {
        this.http = http;
        this.locationList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.locationList$ = this.locationList.asObservable();
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    LocationService.prototype.locationUrl = function () {
        return '/api/location/all';
    };
    LocationService.prototype.addLocationUrl = function () {
        return '/api/location/create';
    };
    LocationService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.getLocations().then(function (locations) {
            _this.locationList.next(locations);
            _this.staticLocationList = locations;
        });
    };
    LocationService.prototype.getLocations = function () {
        return this.http.get(this.locationUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LocationService.prototype.addLocation = function (location) {
        return this.http.post(this.addLocationUrl(), location, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    LocationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return LocationService;
}());
LocationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], LocationService);

var _a;
//# sourceMappingURL=location.service.js.map

/***/ }),

/***/ "../../../../../src/app/location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location() {
    }
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ }),

/***/ "../../../../../src/app/note.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Note; });
var Note = (function () {
    function Note() {
    }
    return Note;
}());

//# sourceMappingURL=note.js.map

/***/ }),

/***/ "../../../../../src/app/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'add-people',
        template: __webpack_require__("../../../../../src/app/templates/people.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], PeopleComponent);

var _a;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/project-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("../../../../../src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectEditComponent = (function () {
    function ProjectEditComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.onStopEditing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        this.isEditing = false;
        this.deleteModal = false;
        this.entity = 'project';
    }
    Object.defineProperty(ProjectEditComponent.prototype, "project", {
        get: function () {
            return this._project;
        },
        set: function (val) {
            this._project = val;
            this.isEditing = this._project.project_id != undefined && this._project.project_id != '';
        },
        enumerable: true,
        configurable: true
    });
    ProjectEditComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    ProjectEditComponent.prototype.ngOnInit = function () {
    };
    ProjectEditComponent.prototype.addProject = function () {
        this.projectService.addProject(this._project).then(function () { return location.reload(); });
    };
    ProjectEditComponent.prototype.stopEditing = function () {
        this._project.project_id = '';
        this.project = this._project;
        this.onStopEditing.next(true);
    };
    return ProjectEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]) === "function" && _b || Object])
], ProjectEditComponent.prototype, "project", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ProjectEditComponent.prototype, "onStopEditing", void 0);
ProjectEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'project-edit',
        template: __webpack_require__("../../../../../src/app/templates/project-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */]) === "function" && _e || Object])
], ProjectEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=project-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("../../../../../src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item__ = __webpack_require__("../../../../../src/app/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
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







var ProjectComponent = (function () {
    function ProjectComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        this.title = 'Projects';
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectService.getProjects()
            .then(function (projects) {
            _this.projects = projects;
            _this.items = [];
            for (var _i = 0, projects_1 = projects; _i < projects_1.length; _i++) {
                var project = projects_1[_i];
                var item = new __WEBPACK_IMPORTED_MODULE_4__item__["a" /* Item */]();
                item.value = project.name;
                item.id = project.project_id;
                item.type = 'project';
                _this.items.push(item);
            }
        });
    };
    ProjectComponent.prototype.onStopEditing = function (val) {
        this.project.project_id = '';
    };
    ProjectComponent.prototype.onItemSelect = function (item) {
        for (var _i = 0, _a = this.projects; _i < _a.length; _i++) {
            var project = _a[_i];
            if (project.project_id == item.id) {
                this.project = __assign({}, project);
                break;
            }
        }
    };
    return ProjectComponent;
}());
ProjectComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'project-view',
        template: __webpack_require__("../../../../../src/app/templates/project.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__project_service__["a" /* ProjectService */]) === "function" && _c || Object])
], ProjectComponent);

var _a, _b, _c;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/project.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectService = (function () {
    function ProjectService(http) {
        this.http = http;
        this.projectList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.projectList$ = this.projectList.asObservable();
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ProjectService.prototype.projectUrl = function () {
        return '/api/project/all';
    };
    ProjectService.prototype.addProjectUrl = function () {
        return '/api/project/create';
    };
    ProjectService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.getProjects().then(function (projects) {
            _this.projectList.next(projects);
            _this.staticProjectList = projects;
        });
    };
    ProjectService.prototype.getProjects = function () {
        return this.http.get(this.projectUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(this.addProjectUrl(), project, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProjectService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ProjectService;
}());
ProjectService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ProjectService);

var _a;
//# sourceMappingURL=project.service.js.map

/***/ }),

/***/ "../../../../../src/app/project.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Project; });
var Project = (function () {
    function Project() {
    }
    return Project;
}());

//# sourceMappingURL=project.js.map

/***/ }),

/***/ "../../../../../src/app/referral.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referral__ = __webpack_require__("../../../../../src/app/referral.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReferralService = (function () {
    function ReferralService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ReferralService.prototype.referralUrl = function () {
        return '/api/referral/create';
    };
    ReferralService.prototype.addReferral = function (familyId, serviceId) {
        var referral = new __WEBPACK_IMPORTED_MODULE_2__referral__["a" /* Referral */]();
        referral.family_id = familyId;
        referral.service_id = serviceId;
        return this.http.post(this.referralUrl(), referral, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ReferralService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ReferralService;
}());
ReferralService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ReferralService);

var _a;
//# sourceMappingURL=referral.service.js.map

/***/ }),

/***/ "../../../../../src/app/referral.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Referral; });
var Referral = (function () {
    function Referral() {
    }
    return Referral;
}());

//# sourceMappingURL=referral.js.map

/***/ }),

/***/ "../../../../../src/app/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_service__ = __webpack_require__("../../../../../src/app/search.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'search-view',
        template: __webpack_require__("../../../../../src/app/templates/search.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__search_service__["a" /* SearchService */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* unused harmony export ChildCarer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    SearchService.prototype.searchUrl = function (term) {
        return '/api/search/all?term=' + term;
    };
    SearchService.prototype.doSearch = function (term) {
        return this.http.get(this.searchUrl(term), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    SearchService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return SearchService;
}());
SearchService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SearchService);

var ChildCarer = (function () {
    function ChildCarer() {
    }
    return ChildCarer;
}());

var _a;
//# sourceMappingURL=search.service.js.map

/***/ }),

/***/ "../../../../../src/app/service-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__("../../../../../src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceEditComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ServiceEditComponent = (function () {
    function ServiceEditComponent(route, router, serviceService) {
        this.route = route;
        this.router = router;
        this.serviceService = serviceService;
        this.onStopEditing = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
        this._service = new __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]();
        this.isEditing = false;
        this.deleteModal = false;
        this.entity = 'service';
    }
    Object.defineProperty(ServiceEditComponent.prototype, "service", {
        get: function () {
            return this._service;
        },
        set: function (val) {
            this._service = val;
            this.isEditing = this._service.service_id != undefined && this._service.service_id != '';
        },
        enumerable: true,
        configurable: true
    });
    ServiceEditComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    ServiceEditComponent.prototype.ngOnInit = function () {
    };
    ServiceEditComponent.prototype.addService = function () {
        this.serviceService.addService(this._service).then(function () { return location.reload(); });
    };
    ServiceEditComponent.prototype.stopEditing = function () {
        this._service.service_id = '';
        this.service = this._service;
        this.onStopEditing.next(true);
    };
    return ServiceEditComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]) === "function" && _b || Object])
], ServiceEditComponent.prototype, "service", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ServiceEditComponent.prototype, "onStopEditing", void 0);
ServiceEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'service-edit',
        template: __webpack_require__("../../../../../src/app/templates/service-edit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServiceService */]) === "function" && _e || Object])
], ServiceEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=service-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_service__ = __webpack_require__("../../../../../src/app/service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item__ = __webpack_require__("../../../../../src/app/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
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







var ServiceComponent = (function () {
    function ServiceComponent(route, router, serviceService) {
        this.route = route;
        this.router = router;
        this.serviceService = serviceService;
        this.service = new __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]();
        this.title = 'Services';
    }
    ServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceService.getServices()
            .then(function (services) {
            _this.services = services;
            _this.items = [];
            for (var _i = 0, services_1 = services; _i < services_1.length; _i++) {
                var service = services_1[_i];
                var item = new __WEBPACK_IMPORTED_MODULE_4__item__["a" /* Item */]();
                item.value = service.name;
                item.id = service.service_id;
                item.type = 'service';
                _this.items.push(item);
            }
        });
    };
    ServiceComponent.prototype.onStopEditing = function (val) {
        this.service.service_id = '';
    };
    ServiceComponent.prototype.onItemSelect = function (item) {
        for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
            var service = _a[_i];
            if (service.service_id == item.id) {
                this.service = __assign({}, service);
                break;
            }
        }
    };
    return ServiceComponent;
}());
ServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'service-view',
        template: __webpack_require__("../../../../../src/app/templates/service.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_service__["a" /* ServiceService */]) === "function" && _c || Object])
], ServiceComponent);

var _a, _b, _c;
//# sourceMappingURL=service.component.js.map

/***/ }),

/***/ "../../../../../src/app/service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceService = (function () {
    function ServiceService(http) {
        this.http = http;
        this.serviceList = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.serviceList$ = this.serviceList.asObservable();
        this.called = false;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    ServiceService.prototype.serviceUrl = function () {
        return '/api/service/all';
    };
    ServiceService.prototype.addServiceUrl = function () {
        return '/api/service/create';
    };
    ServiceService.prototype.init = function () {
        var _this = this;
        if (this.called) {
            return;
        }
        this.called = true;
        this.getServices().then(function (services) {
            _this.serviceList.next(services);
            _this.staticServiceList = services;
        });
    };
    ServiceService.prototype.getServices = function () {
        return this.http.get(this.serviceUrl(), this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServiceService.prototype.addService = function (service) {
        return this.http.post(this.addServiceUrl(), service, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ServiceService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ServiceService;
}());
ServiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ServiceService);

var _a;
//# sourceMappingURL=service.service.js.map

/***/ }),

/***/ "../../../../../src/app/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
var Service = (function () {
    function Service() {
    }
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ "../../../../../src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-top\">\n  <div class=\"w3-bar w3-theme w3-top w3-left-align w3-large\">\n    <div *ngIf=\"!showSidebar()\" style=\"margin-top:15px;\" class=\"w3-bar-item w3-button w3-right w3-vertical-middle w3-hover-white w3-large w3-theme-l1\" (click)=\"toggle()\"><i class=\"fa fa-bars\"></i></div>\n    <input #navSearchBox (keyup.enter)=\"onSearch(navSearchBox.value);\" style=\"margin-top:11px;margin-right:10px;\" class=\"w3-search w3-bar-item w3-theme-l5 w3-right\" type=\"search\" name=\"search\" placeholder=\"Search...\" id=\"search-bar\">\n    <img routerLink=\"/\" src=\"app/img/playbuslogo.png\" height=\"75\" width=\"75\" class=\"w3-bar-item w3-button w3-theme\">\n  </div>\n</div>\n<nav *ngIf=\"show || showSidebar()\" class=\"jono-sidebar w3-bar-block w3-collapse w3-large w3-theme-l5 w3-animate-left\" style=\"z-index:3;width:150px;margin-top:70px;\" id=\"mySidebar\">\n  <div *ngIf=\"show\" (click)=\"toggle()\" class=\"w3-right w3-xlarge w3-padding-large w3-hover-black\" title=\"Close Menu\">\n    <i class=\"fa fa-remove\"></i>\n  </div>\n  <h4 class=\"w3-bar-item\"><b>Hackney Playbus</b></h4>\n  <a class=\"w3-bar-item w3-button w3-hover-black\" routerLink=\"/\">People</a>\n  <a class=\"w3-bar-item w3-button w3-hover-black\" routerLink=\"/locations\">Locations</a>\n  <a class=\"w3-bar-item w3-button w3-hover-black\" routerLink=\"/projects\">Projects</a>\n  <a class=\"w3-bar-item w3-button w3-hover-black\" routerLink=\"/services\">Services</a>\n  <a class=\"w3-bar-item w3-button w3-hover-black\" routerLink=\"/search\">Search</a>  \n</nav>\n\n<!-- Overlay effect when opening sidebar on small screens -->\n<div *ngIf=\"show\" class=\"w3-overlay\" (click)=\"toggle()\" style=\"cursor:pointer\" title=\"close side menu\" id=\"myOverlay\"></div>\n\n<div [style.margin-left]=\"leftMargin\">\n    <router-outlet></router-outlet>  \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/carer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"Carer\" class=\"w3-container registrationForm\">\n<form onsubmit=\"submitCarer(event);\" id='carer-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">\n        <h2 id='reg-carer-header' class=\"w3-center w3-text-teal\">{{title}}</h2>          \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n                <div class=\"w3-rest\">\n                <input #carerNameBox [(ngModel)]='carer.name' (keyup)='completeCarer(carerNameBox.value);' class=\"w3-input w3-border w3-round-medium\" name=\"carer-name\" id=\"carer-name\" type=\"text\" placeholder=\"Name\" required>\n                </div>\n            </div>     \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-birthday-cake\"></i></div>\n                <div class=\"w3-rest\">\n                <input #carerDobBox [(ngModel)]='carer.date_of_birth' class=\"w3-input w3-border w3-round-medium date-input\" id='carer-dob'  name=\"carer-dob\" type=\"date\" placeholder=\"Birthday\" min=\"1900-01-01\" max=\"2020-04-30\" required>\n                </div>\n            </div>                         \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-home\"></i></div>\n                <div class=\"w3-rest\">\n                    <input #carerAddressBox [(ngModel)]='carer.address' class=\"w3-input w3-border w3-round-medium\" name=\"carer-address\" id=\"carer-address\" type=\"text\" placeholder=\"Address\" required>\n                </div>\n            </div>\n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-home\"></i></div>\n                <div class=\"w3-rest\">\n                    <input #carerPostalCodeBox [(ngModel)]='carer.postal_code' class=\"w3-input w3-border w3-round-medium\" name=\"carer-postalcode\" id=\"carer-postalcode\" type=\"text\" placeholder=\"Postal Code\" required>\n                </div>\n            </div>\n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-building\"></i></div>\n                <div class=\"w3-rest\">\n                    <input #carerCityBox [(ngModel)]='carer.city' class=\"w3-input w3-border w3-round-medium\" name=\"carer-city\" id=\"carer-city\" type=\"text\" placeholder=\"City\" required>\n                </div>\n            </div>        \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-phone\"></i></div>\n                <div class=\"w3-rest\">\n                    <input #carerPhoneBox [(ngModel)]='carer.phone' class=\"w3-input w3-border w3-round-medium\" name=\"carer-phone\" id=\"carer-phone\" type=\"tel\" placeholder=\"Phone\" required>\n                </div>\n            </div>        \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-envelope\"></i></div>\n                <div class=\"w3-rest\">\n                    <input #carerEmailBox [(ngModel)]='carer.email' class=\"w3-input w3-border w3-round-medium\" name=\"carer-email\" id=\"carer-email\" type=\"email\" placeholder=\"Email\" required>\n                </div>\n            </div>             \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-users\"></i></div>\n                <div class=\"w3-rest\">\n                    <select #carerEthnicityBox [(ngModel)]='carer.ethnicity' class=\"w3-input w3-border w3-round-medium carer-ethnicity-dropdown\" id='carer-ethnicity' name=\"carer-ethnicity\" type=\"text\" placeholder=\"Ethnicity\">\n                        <option value=\"\" disabled selected hidden>Ethnicity</option>\n                        <option *ngFor=\"let ethnicity of ethnicityList\" value=\"{{ethnicity}}\">{{ethnicity}}</option>\n                    </select>\n                    <label class='w3-text-black' for=\"carer-ethnicity\">ethnicity</label>\n                </div>\n            </div> \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-users\"></i></div>\n                <div class=\"w3-rest\">\n                    <select #carerBenefitBox [(ngModel)]='carer.benefits' class=\"w3-input w3-border w3-round-medium carer-benefit-dropdown\" id='carer-benefits' name=\"carer-benefit\" type=\"text\" placeholder=\"benefits\">                        \n                        <option *ngFor=\"let benefit of benefitList\" value=\"{{benefit}}\">{{benefit}}</option>\n                    </select> \n                    <label class='w3-text-black' for=\"carer-benefit\">benefits</label>                 \n                </div>\n            </div>           \n\n        <div class=\"w3-row w3-section\">\n        <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-transgender-alt\"></i></div>\n            <div class=\"w3-rest\">\n                <select #carerGenderBox [(ngModel)]='carer.gender' class=\"w3-input w3-border w3-round-medium\" id='carer-gender' name=\"carer-gender\" type=\"text\" placeholder=\"Gender\">\n                    <option value=\"female\">Female</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"other\">Other</option>                  \n                </select>\n                <label class='w3-text-black' for=\"carer-gender\">gender</label>\n            </div>\n        </div>\n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user-o\"></i></div>\n            <div class=\"w3-rest\" style='padding-top:7px;'>\n                <input #carerLoneCarerBox [(ngModel)]='carer.lone_carer' class='w3-padding-right' name=\"carer-lonecarer\" id=\"carer-lonecarer\" type=\"checkbox\">\n                <span class='w3-text-black' for=\"carer-lonecarer\">Single Carer?</span>\n            </div>\n        </div>\n        \n        <input (click)='submitCarer();$event.preventDefault();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Submit\">\n    </form>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/templates/child.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"Child\" class=\"w3-container registrationForm\">\n    <form onsubmit=\"submitChild(event);\" id='child-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">        \n        <h2 id='reg-header' class=\"w3-center w3-text-teal\">{{title}}</h2>          \n        <div class=\"w3-row w3-section\">\n            <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-user\"></i></div>\n                <div class=\"w3-rest\">\n                    <input [(ngModel)]='child.name' #childNameBox (keyup)='completeChild(childNameBox.value);' class=\"w3-input w3-border w3-round-medium\" name=\"child-name\" id=\"child-name\" type=\"text\" placeholder=\"Name\" required>\n                </div>\n            </div>\n        <div class=\"w3-row w3-section\">\n        <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-birthday-cake\"></i></div>\n            <div class=\"w3-rest\">\n                <input #childDobBox [(ngModel)]='child.date_of_birth' class=\"w3-input w3-border w3-round-medium date-input\" id='child-dob'  name=\"child-dob\" type=\"date\" placeholder=\"Birthday\" min=\"1900-01-01\" max=\"2020-04-30\" required>\n            </div>\n        </div>\n        <div class=\"w3-row w3-section\">\n        <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-users\"></i></div>\n            <div class=\"w3-rest\">\n            <select #childEthnicityBox [(ngModel)]='child.ethnicity' class=\"w3-input w3-border w3-round-medium child-ethnicity-dropdown\" id='child-ethnicity' name=\"child-ethnicity\" type=\"text\" placeholder=\"Ethnicity\">\n                <option *ngFor=\"let ethnicity of ethnicityList\" value=\"{{ethnicity}}\">{{ethnicity}}</option>\n            </select>                  \n            <label class='w3-text-black' for=\"child-ethnicity\">ethnicity</label>\n            </div>\n        </div>\n\n        <div class=\"w3-row w3-section\">\n        <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-transgender-alt\"></i></div>\n            <div class=\"w3-rest\">\n                <select #childGenderBox [(ngModel)]='child.gender' class=\"w3-input w3-border w3-round-medium\" id='child-gender' name=\"child-gender\" type=\"text\" placeholder=\"Gender\">\n                    <option value=\"female\">Female</option>\n                    <option value=\"male\">Male</option>\n                    <option value=\"other\">Other</option>                  \n                </select>\n                <label class='w3-text-black' for=\"child-gender\">gender</label>\n            </div>\n        </div>\n        <input (click)='submitChild();$event.preventDefault();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Submit\">\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/complete-name.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='child-before' class=\"w3-container w3-card-4\" style=\"padding: 5px;\">\n    <h3 class=\"w3-center w3-text-teal\">Been Here Before?</h3>\n    <table class=\"w3-table w3-hoverable w3-bordered\">\n        <tbody id='autocomplete-table-child'>\n            <tr class='w3-cell-row'>\n                <th>Name</th>\n                <th class='w3-right-align'>Birthday<br> (dd/mm)</th>\n            </tr>\n            <tr *ngFor=\"let carer of carers\" class='w3-cell-row jonobutton' (click)='goToFamily(carer.family_id);'>\n                <td>{{carer.name}}</td>\n                <td class='w3-right-align'>{{carer.date_of_birth | date: 'dd/MM'}}</td>\n            </tr>\n            <tr *ngFor=\"let child of children\" (click)='goToFamily(child.family_id);' class='w3-cell-row jonobutton'>\n                <td>{{child.name}}</td>\n                <td class='w3-right-align'>{{child.date_of_birth | date: 'dd/MM'}}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/consent.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-row w3-padding-64\">\n    <div class=\"w3-container w3-margin\">\n        <h1 class=\"w3-text-teal\">Disclaimer</h1>\n        <p>Hackney Playbus collects this information for monitoring, analysis and data collection purposes.  Your information may be disclosed to other government agencies responsible for legislation relating to children and may be shared with your local children’s centre. Your contact information may be used to keep you informed of Hackney Playbus services. Personal information collected in this form will only be used for the purposes stated here. By completing this registration form it is deemed that you understand and consent to the purposes which the information may be used for. </p>\n        <div class='w3-right'>\n            <input #consentInfoBox (change)='consent.info_consent = consentInfoBox.checked;' id='info-consent' type=\"checkbox\">\n            <label for=\"info-consent\">I consent</label>\n        </div>\n\n        <h1 class=\"w3-text-teal\">Photography Consent</h1>\n        <p>I, the carer completing this form, give my consent for the children named in this form to be photographed during Playbus sessions by Hackney Playbus staff, volunteers and partner organisations. I consent to photographs of my children being displayed on the Hackney Playbus website, Facebook and Twitter and also in any advertising material for the Hackney Playbus, their funders or partner organisations.</p>\n        <div class='w3-right'>\n            <input #consentPhotoBox (change)='consent.photo_consent = consentPhotoBox.checked;' id='photo-consent' type=\"checkbox\">\n            <label for=\"photo-consent\">I consent</label>\n        </div>\n        <br/>\n        <input (click)='submitConsent();$event.preventDefault();' class=\"w3-button w3-right w3-border w3-margin\" type=\"submit\" value=\"Submit\">\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/display-carer.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"w3-container w3-text-teal w3-theme-l2\">   \n    <i class=\"w3-xlarge fa fa-times w3-right w3-text-teal w3-button delete-button\" (click)='deleteModal = true;' style=\"padding:16px 12px;\"></i>\n    <i class=\"w3-xlarge fa fa-edit w3-right w3-text-teal w3-button edit-button\" (click)='editModal = true;' style=\"padding:16px 12px;\"></i>             \n    <h4 class='carer-name'>{{carer.name}}</h4>\n</header>\n<add-visit [carerId]='carer.carer_id' [familyId]='carer.family_id'></add-visit>\n<div class=\"w3-container\">\n    <table class=\"w3-table w3-text-gray\">          \n        <tr>\n        <td>Date of Birth:</td>\n        <td class='carer-dob'>{{carer.date_of_birth | date:'dd/MM/yyyy'}}</td>                             \n        </tr>\n        <tr>\n        <td>Gender:</td>\n        <td class='carer-gender'>{{carer.gender}}</td>                \n        </tr>\n        <tr>\n        <td>Ethnicity:</td>\n        <td class='carer-ethnicity'>{{carer.ethnicity}}</td>\n        </tr>                          \n        <tr>\n        <td>First Seen:</td>\n        <td class='carer-firstseen'>{{carer.first_seen | date:'medium'}}</td>\n        </tr>\n        <tr>\n        <td>Photo Consent?:</td>\n        <td class='carer-photoconsent'>{{carer.photo_consent}}</td>\n        </tr>\n        <tr>\n        <td>Address:</td>\n        <td class='carer-address'>{{carer.address}}</td>\n        </tr>\n        <tr>\n        <td>Postal Code:</td>\n        <td class='carer-postalcode'>{{carer.postal_code}}</td>\n        </tr>\n        <tr>\n        <td>City:</td>\n        <td class='carer-city'>{{carer.city}}</td>\n        </tr>\n        <tr>                \n        <td>Phone:</td>\n        <td class='carer-phone'>{{carer.phone}}</td>\n        </tr>\n        <tr>\n        <td>Email:</td>\n        <td class='carer-email'>{{carer.email}}</td>\n        </tr>\n        <tr>\n        <td>Benefits:</td>\n        <td class='carer-benefits'>{{carer.benefits}}</td>\n        </tr>\n        <tr>\n        <td>Lone Carer?:</td>\n        <td class='carer-lonecarer'>{{carer.lone_carer}}</td>\n        </tr>\n        <tr>\n        <td>Number of Visits:</td>\n        <td (click)='visitModal = true;' class='carer-numvisits w3-text-teal'>{{carer.number_of_visits}} (view)</td>\n        </tr>\n    </table>        \n    <hr>  \n</div>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='carer.carer_id'></delete-confirm>\n<div *ngIf=\"editModal\" (click)='closeEditModal($event);' id=\"edit-carer-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <carer-edit [carer]='carer' [title]='editTitle' (onSubmit)='onEdit($event)'></carer-edit>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"visitModal\" (click)='closeVisitModal($event);' id=\"visit-carer-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <visit-list [visits]='carer.visits'></visit-list>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/templates/display-child.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"w3-container w3-text-teal w3-theme-l2\">        \n    <i class=\"w3-xlarge fa fa-times w3-right w3-text-teal w3-button delete-button\" (click)='deleteModal=true;' style=\"padding:16px 12px;\"></i>\n    <i class=\"w3-xlarge fa fa-edit w3-right w3-text-teal w3-button edit-button\" (click)='editModal=true;' style=\"padding:16px 12px;\"></i>        \n    <h4 class='child-name'>{{child.name}}</h4>\n</header>   \n<add-visit [childId]='child.child_id' [familyId]='child.family_id'></add-visit>\n<div class=\"w3-container\">\n    <table class=\"w3-table w3-text-gray\">          \n        <tr>\n        <td>Date of Birth:</td>\n        <td class='child-dob'>{{child.date_of_birth | date:'dd/MM/yyyy'}}</td>                             \n        </tr>\n        <tr>\n        <td>Gender:</td>\n        <td class='child-gender'>{{child.gender}}</td>                             \n        </tr>\n        <tr>\n        <td>Ethnicity:</td>\n        <td class='child-ethnicity'>{{child.ethnicity}}</td>                             \n        </tr>                          \n        <tr>\n        <td>First Seen:</td>\n        <td class='child-firstseen'>{{child.first_seen | date:'medium'}}</td>\n        </tr>\n        <tr>\n        <td>Photo Consent:</td>\n        <td class='child-photoconsent'>{{child.photo_consent}}</td>\n        </tr>\n        <tr>\n        <td>Number of Visits:</td>\n        <td (click)='visitModal = true;' class='child-numvisits w3-text-teal'>{{child.number_of_visits}} (view)</td>\n        </tr>\n    </table>\n    <hr>  \n</div>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='child.child_id'></delete-confirm>\n<div *ngIf=\"editModal\" (click)='closeEditModal($event);' id=\"edit-child-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <child-edit [child]='child' [title]='editTitle' (onSubmit)='onEdit($event)'></child-edit>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"visitModal\" (click)='closeVisitModal($event);' id=\"visit-child-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <visit-list [visits]='child.visits'></visit-list>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/family.component.html":
/***/ (function(module, exports) {

module.exports = "    <div class=\"w3-row w3-padding-64\">\n        <div  class=\"w3-half w3-container\" style=\"margin-top:16px\">\n            <div class=\"w3-card-4\" style=\"margin-left:8px\">\n                <i class=\"w3-xlarge fa fa-user-plus w3-right w3-text-teal w3-button\" (click)='childModal = true;' style=\"padding:6px 12px;\"></i>\n                <h3 class=\"w3-center w3-text-teal\">Children</h3>\n                <div *ngFor=\"let child of family.children\" id='child-card-placeholder'>\n                    <display-child [child]=\"child\"></display-child>\n                </div>\n            </div>\n        </div>\n        <div class=\"w3-half w3-container\" style=\"margin-top:16px\">\n            <div class=\"w3-card-4\" style=\"margin-left:8px\">\n                <i class=\"w3-xlarge fa fa-user-plus w3-right w3-text-teal w3-button\"  (click)='carerModal = true;' style=\"padding:6px 12px;\"></i>\n                <h3 class=\"w3-center w3-text-teal\">Carers</h3>\n                <div *ngFor=\"let carer of family.carers\" id='carer-card-placeholder'>\n                    <display-carer [carer]=\"carer\"></display-carer>\n                </div>\n            </div>\n        </div>\n  </div>\n  <div class=\"w3-row w3-padding-8\">\n      <div class=\"w3-half w3-container\">\n        <agm-map style=\"width:100%; height:400px;\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"12\">\n            <agm-marker-cluster  [maxZoom]=\"15\" [imagePath]=\"'https://googlemaps.github.io/js-marker-clusterer/images/m'\">\n                <agm-marker *ngFor='let carer of family.carers' [latitude]=\"carer.latitude\" [longitude]=\"carer.longitude\">\n                    <agm-info-window>\n                        <div>\n                            <h5>Carer Home</h5>\n                            Name:  {{carer.name}}\n                        </div>\n                    </agm-info-window>\n                </agm-marker>\n                <agm-marker *ngFor='let visit of family.visits' [latitude]=\"visit.location.latitude\" [longitude]=\"visit.location.longitude\">\n                    <agm-info-window>\n                        <div>\n                            <h5><div *ngIf='visit.carer_id'>Carer</div> <div *ngIf='visit.child_id'>Child</div> Visit</h5>\n                            <ng-container *ngIf='visit.carer_id'>\n                                <ng-container *ngFor=\"let carer of family.carers\">\n                                    <div *ngIf='visit.carer_id==carer.carer_id'>\n                                        Name: {{carer.name}}\n                                    </div>\n                                </ng-container>\n                            </ng-container>\n                            <ng-container *ngIf='visit.child_id'>\n                                    <ng-container *ngFor=\"let child of family.children\">\n                                        <div *ngIf='visit.child_id==child.child_id'>\n                                            Name: {{child.name}}\n                                        </div>\n                                    </ng-container>\n                                </ng-container>\n                        </div>    \n                    </agm-info-window>\n                </agm-marker>\n            </agm-marker-cluster>\n        </agm-map>        \n      </div>\n      <div class=\"w3-half w3-container\">\n        <div class=\"w3-card-4\" style=\"margin-left:8px\">\n            <i class=\"w3-xlarge fa fa-plus-square w3-right w3-text-teal w3-button\"  (click)='noteModal = true;' style=\"padding:6px 12px;\"></i>\n            <h3 class=\"w3-center w3-text-teal\">Notes</h3>\n            <div *ngFor=\"let note of family.notes\" id='note-card-placeholder'>\n                <div id='note-card' class=\"w3-border-top\">\n                    <div class=\"w3-container w3-text-dark-grey\" style='padding-top:16px;'>\n                        <div class='note-text'>{{note.note}}</div>\n                        <hr> \n                        <div class='w3-text-grey'>\n                            By <i class='note-author'>{{note.note_taker}}</i> <br /> <i class='note-timestamp'>{{note.timestamp | date:'medium'}}</i><br/><br/>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n  </div>\n  <div class=\"w3-row w3-padding-8\">      \n      <div class=\"w3-container\">\n        <div class=\"w3-card-4\" style=\"margin-left:8px\">\n            <i class=\"w3-xlarge fa fa-plus-square w3-right w3-text-teal w3-button\"  (click)='referralModal = true;' style=\"padding:6px 12px;\"></i>\n            <h3 class=\"w3-center w3-text-teal\">Referrals</h3>\n            <div *ngFor=\"let referral of family.referrals\" id='referral-card-placeholder'>\n                <div id='referral-card' class=\"w3-border-top\">\n                    <div class=\"w3-container w3-text-dark-grey\" style='padding-top:16px;'>        \n                        <i class='referral-service'>{{referral.service.name}}</i>\n                        <i class=\"w3-large fa fa-times w3-text-teal w3-button referral-delete-button\" (click)='referralId = referral.referral_id;referralDelete = true;'  style=\"padding:16px 12px;\"></i>\n                    </div>\n                </div>\n            </div>\n        </div>\n      </div>\n  </div>\n<br/>\n<br/>\n\n<div *ngIf=\"childModal\" (click)='closeModal($event);' id=\"child-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <child-edit [familyId]='family_id' (onSubmit)='onChildSubmit($event)'></child-edit>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"carerModal\" (click)='closeModal($event);' id=\"carer-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <carer-edit [familyId]='family_id' (onSubmit)='onCarerSubmit($event)'></carer-edit>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"noteModal\" (click)='closeModal($event);' id=\"note-modal\" class=\"w3-modal\">    \n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <edit-note [family_id]='family_id' ></edit-note>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"locationModal\" (click)='closeModal($event);' id='location-modal' class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div id='location-list-placeholder'></div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"visitModal\" (click)='closeModal($event);' id='visit-modal' class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div id='visit-placeholder'>\n                <div class='w3-container w3-card-4 w3-margin'>\n                    <h3 id='visit-title' class=\"w3-text-teal\">Visits</h3>    \n                    <div id='visit-list'></div>\n                </div>\n                <div id='visit-instance' style='display:none;'>\n                    <i id='visit-elm' class='visit-element'></i>\n                    <i class=\"w3-text-teal w3-button visit-delete-button\"  style=\"padding:16px 12px;\">(delete)</i>\n                    <br/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"childVisitModal\" (click)='closeModal($event);' id='change-visit-modal' class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div id='change-visit-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">\n                <h2 id='visit-reg-header' class=\"w3-center w3-text-teal\">Set Default Visit</h2>          \n                <div class=\"w3-row w3-section\">\n                    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map\"></i></div>\n                        <div class=\"w3-rest\">\n                            <select class=\"w3-input w3-border w3-round-medium location-dropdown\" id='visit-location' name=\"visit-location\" type=\"text\" placeholder=\"Location\">\n                                <option value=\"\" disabled selected hidden>Location</option>\n                            </select>\n                        </div>\n                    </div>\n                <div class=\"w3-row w3-section\">\n                <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-\"></i></div>\n                    <div class=\"w3-rest\">\n                        <select class=\"w3-input w3-border w3-round-medium project-dropdown\" id='visit-project' name=\"visit-project\" type=\"text\" placeholder=\"Project\">\n                            <option value=\"\" disabled selected hidden>Project</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"w3-row w3-section\">\n                <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-calendar\"></i></div>\n                    <div class=\"w3-rest\">\n                        <input class=\"w3-input w3-border w3-round-medium date-input\" id='visit-date'  name=\"visit-date\" type=\"date\" placeholder=\"Visit Date\" min=\"1900-01-01\" max=\"2099-04-30\">\n                        <i class=\"w3-right w3-text-teal w3-small\" style='margin-right:3px;'>optional</i>\n                    </div>\n                </div>\n                <div id='visit-error' class='w3-left w3-text-red'></div>\n                <input onclick='setDefaultVisit();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Set Default Visit\" style='margin-left:10px;'>\n                <input id='visit-submit' onclick='addAndSetVisit(event, this);' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Add Visit\">\n            </div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"projectModal\" (click)='closeModal($event);' id='project-modal' class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div id='project-list-placeholder'></div>\n        </div>\n    </div>\n</div>\n\n<div *ngIf=\"referralModal\" (click)='closeModal($event);' id=\"referral-modal\" class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div class='w3-container w3-card-4 w3-margin'>\n                <h3 id='serviceselector-title' class=\"w3-text-teal\">Services</h3>    \n                <div *ngFor='let service of services' id='service-instance' class='active-element jono-button'>\n                    <i (click)='addService(service.service_id); referralModal = false;' id='service-elm' class='service-element'>{{service.name}}</i>\n                    <br/>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<delete-confirm [deleteModal]='referralDelete' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='referralEntity' [entityId]='referralId'></delete-confirm>"

/***/ }),

/***/ "../../../../../src/app/templates/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='w3-container w3-card-4 w3-margin'>\n    <h3 id='locationselector-title' class=\"w3-text-teal\">{{title}}</h3>    \n    <div id='location-list'>\n        <div *ngFor='let item of items'>\n            <i  (click)='editItem(item);' id='location-elm' class='location-element active-element jono-button'>{{item.value}}</i>\n            <br/>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/location-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form id='location-form' class=\"w3-container w3-card-4 w3-text-yellow w3-margin\" style=\"padding-bottom: 10px;\">\n    <i *ngIf='isEditing' id='location-header-exit' (click)='stopEditing();' class=\"w3-button w3-large fa fa-times w3-right w3-text-teal\" style='margin-top:18px;'> Stop Editing</i>\n    <h2 id='location-header' class=\"w3-text-teal\">{{title || 'Add Location'}}</h2>          \n    <div class=\"w3-row w3-section\">\n        <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map-signs\"></i></div>\n            <div class=\"w3-rest\">\n                <input [(ngModel)]='_location.name' class=\"w3-input w3-border w3-round-medium\" name=\"location-name\" id=\"location-name\" type=\"text\" placeholder=\"Name\" required>\n            </div>\n        </div>\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-file-text\"></i></div>\n        <div class=\"w3-rest\">\n        <textarea [(ngModel)]='_location.description' class=\"w3-input w3-border w3-round-medium\" id='location-description' name=\"location-description\" placeholder=\"Description\"></textarea>                 \n        </div>\n    </div>\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map-marker\"></i></div>\n        <div class=\"w3-rest\">\n            <input [(ngModel)]='_location.address' class=\"w3-input w3-border w3-round-medium\" id='location-address'  name=\"location-address\" type=\"text\" placeholder=\"Address\">\n        </div>\n    </div>                    \n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map-marker\"></i></div>\n        <div class=\"w3-rest\">\n            <input [(ngModel)]='_location.postal_code' class=\"w3-input w3-border w3-round-medium\" id='location-postalcode'  name=\"location-postalcode\" type=\"text\" placeholder=\"Postal Code\">\n        </div>\n    </div>\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-building\"></i></div>\n        <div class=\"w3-rest\">\n            <input [(ngModel)]='_location.city' class=\"w3-input w3-border w3-round-medium\" id='location-city'  name=\"location-city\" type=\"text\" placeholder=\"City\">\n        </div>\n    </div>\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-crosshairs\"></i></div>\n        <div class=\"w3-rest\">\n            <input [(ngModel)]='_location.latitude' class=\"w3-input w3-border w3-round-medium\" id='location-latitude'  name=\"location-latitude\" type=\"number\" placeholder=\"Latitude\">\n        </div>\n    </div>\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-crosshairs\"></i></div>\n        <div class=\"w3-rest\">\n            <input [(ngModel)]='_location.longitude' class=\"w3-input w3-border w3-round-medium\" id='location-longitude'  name=\"location-longitude\" type=\"number\" placeholder=\"Longitude\">\n        </div>\n    </div>\n\n    <div class=\"w3-row w3-section\">\n    <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map\"></i></div>\n        <div class=\"w3-rest\">\n            <agm-map [clickableIcons]=\"false\" style=\"width:99%; height:300px;\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"12\" (mapClick)=\"mapClicked($event)\">\n                    <agm-marker *ngIf='_location' [latitude]=\"_location.latitude\" [longitude]=\"_location.longitude\">\n                    </agm-marker>\n            </agm-map>\n            \n            <!--div id=\"markerMap\" style='width:99%; height:300px;'></div-->\n        </div>\n    </div>\n    <input *ngIf='isEditing' id='location-delete' (click)='deleteModal = true;' type='button' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" value=\"Delete\">\n    <input (click)='addLocation();' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" type=\"submit\" value=\"Submit\">                    \n</form>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='location.location_id'></delete-confirm>"

/***/ }),

/***/ "../../../../../src/app/templates/location.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-padding-64\">\n    <div class=\"w3-container\">\n        <div class=\"w3-row\">\n            <div class=\"w3-twothird\">\n                <location-edit (onStopEditing)='onStopEditing($event);' [location]='location'></location-edit>\n            </div>\n            <div class='w3-third'>\n                <list-view (onItemSelect)='onItemSelect($event);' [items]='items' [title]='title'></list-view>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-padding-64\">\n    <div class=\"w3-container\">\n      <h1 class=\"w3-text-teal\">Welcome to the Hackney Playbus</h1>\n      <div class=\"w3-bar w3-theme-l1\">\n        <button (click)='tab=\"carer\";term=null;' [class.is_active]=\"tab == 'carer'\" class=\"w3-bar-item w3-button carerButton tabButton\">Carer</button>\n        <button (click)='tab=\"child\";term=null;' [class.is_active]=\"tab == 'child'\" class=\"w3-bar-item w3-button childButton tabButton\">Child</button>                \n      </div>\n      <div style='margin-top: 16px'>\n        <div *ngIf=\"tab == 'carer'\" id=\"Carer\" class=\"w3-container registrationForm\" >\n          <carer-edit (onTerm)=\"onTerm($event)\" (onSubmit)=\"onCarerSubmit($event)\" class='w3-twothird'></carer-edit>\n          <complete-name [term]='term' class='w3-third'></complete-name>\n        </div>\n\n        <div *ngIf=\"tab == 'child'\" id=\"Child\" class=\"w3-container registrationForm\">\n          <child-edit [title]='childTitle' (onTerm)=\"onTerm($event)\" (onSubmit)=\"onChildSubmit($event)\" class='w3-twothird'></child-edit>\n          <complete-name [term]='term' class='w3-third'></complete-name>\n        </div>      \n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/project-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form id='project-form' class=\"w3-container w3-card-4 w3-text-yellow w3-margin\" style=\"padding-bottom: 10px;\">        \n    <i *ngIf='isEditing' id='project-header-exit' (click)='stopEditing();' class=\"w3-button w3-large fa fa-times w3-right w3-text-teal\" style='margin-top:18px;'> Stop Editing</i>\n    <h2 id='project-header' class=\"w3-text-teal\">{{title || 'Add Project'}}</h2>\n    <div class=\"w3-row w3-section\">\n        <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-info-circle\"></i></div>\n            <div class=\"w3-rest\">\n                <input [(ngModel)]='_project.name' class=\"w3-input w3-border w3-round-medium\" name=\"project-name\" id=\"project-name\" type=\"text\" placeholder=\"Name\" required>\n            </div>\n        </div>\n    <div class=\"w3-row w3-section\">\n        <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-money\"></i></div>\n            <div class=\"w3-rest\">\n                <input [(ngModel)]='_project.funder' class=\"w3-input w3-border w3-round-medium\" name=\"project-funder\" id=\"project-funder\" type=\"text\" placeholder=\"Funder\" required>\n            </div>\n        </div>                                        \n    <input *ngIf='isEditing' id='project-delete' (click)='deleteModal = true;' type='button' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" value=\"Delete\">\n    <input (click)='addProject();' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" type=\"submit\" value=\"Submit\">\n</form>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='project.project_id'></delete-confirm>"

/***/ }),

/***/ "../../../../../src/app/templates/project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-padding-64\">\n    <div class=\"w3-container\">\n        <div class=\"w3-row\">\n            <div class=\"w3-twothird\">\n                <project-edit (onStopEditing)='onStopEditing($event);' [project]='project'></project-edit>\n            </div>\n            <div class='w3-third'>\n                <list-view (onItemSelect)='onItemSelect($event);' [items]='items' [title]='title'></list-view>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-padding-64\">\n    \n        <div class=\"w3-container w3-padding-64\">\n            <h1 class=\"w3-text-teal\">Search</h1>\n            <div class=\"w3-rest\">\n                <input #searchBox (keyup.enter)='search(searchBox.value);' style='width:400px;' class=\"w3-search w3-bar-item w3-theme-l5 w3-large\" name=\"search\" id=\"search\" type=\"text\" placeholder=\"Search...\">\n            </div>            \n            <div class=\"w3-row\">\n                <div class=\"w3-twothird\">\n                    <div class=\"w3-card-4 w3-margin\" >\n                      <h3 class=\"w3-center w3-text-teal\">Carers</h3> \n                      <table class=\"w3-table w3-hoverable w3-bordered\" style='width:100%;table-layout:fixed;'>\n                        <tr class='w3-cell-row'>\n                          <th>Name</th>\n                          <th>Birthday</th>\n                          <th>Email</th>\n                        </tr>\n                        <tr *ngFor=\"let carer of carers\" class='w3-cell-row jonobutton' (click)='goToFamily(carer.family_id);'>\n                          <td>{{carer.name}}</td>\n                          <td class='w3-right-align'>{{carer.date_of_birth | date: 'dd/MM/yyyy'}}</td>\n                          <td>{{carer.email}}</td>\n                        </tr>\n                      </table>\n                    </div>\n                </div>\n                <div class=\"w3-third\">\n                    <div class=\"w3-card-4  w3-margin\">\n                    <h3 class=\"w3-center w3-text-teal\">Children</h3> \n                    <table class=\"w3-table w3-hoverable w3-bordered\">          \n                            <table class=\"w3-table w3-hoverable w3-bordered\" style='width:100%;table-layout:fixed;'>\n                                <tr class='w3-cell-row'>\n                                    <th>Name</th>\n                                    <th class='w3-right-align'>Birthday</th>                                    \n                                </tr>\n                                <tr *ngFor=\"let child of children\" class='w3-cell-row jonobutton' (click)='goToFamily(child.family_id);'>\n                                    <td>{{child.name}}</td>\n                                    <td class='w3-right-align'>{{child.date_of_birth | date: 'dd/MM/yyyy'}}</td>\n                                </tr>\n                            </table>\n                      </table>\n                    </div>\n                </div>\n            \n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/service-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<form id='service-form' class=\"w3-container w3-card-4 w3-text-yellow w3-margin\" style=\"padding-bottom: 10px;\">        \n    <i *ngIf='isEditing' id='service-header-exit' (click)='stopEditing();' class=\"w3-button w3-large fa fa-times w3-right w3-text-teal\" style='margin-top:18px;'> Stop Editing</i>\n    <h2 id='service-header' class=\"w3-text-teal\">{{title || 'Add Service'}}</h2>\n    <div class=\"w3-row w3-section\">\n        <div class=\"w3-col w3-center\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-info-circle\"></i></div>\n            <div class=\"w3-rest\">\n                <input  [(ngModel)]='_service.name' class=\"w3-input w3-border w3-round-medium\" name=\"service-name\" id=\"service-name\" type=\"text\" placeholder=\"Name\" required>\n            </div>\n        </div>                                        \n    <input *ngIf='isEditing' id='service-delete' (click)='deleteModal = true;' type='button' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" value=\"Delete\">\n    <input (click)='addService();' class=\"w3-button w3-right w3-text-teal w3-border w3-margin\" type=\"submit\" value=\"Submit\">\n</form>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='service.service_id'></delete-confirm>"

/***/ }),

/***/ "../../../../../src/app/templates/service.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"w3-padding-64\">\n    <div class=\"w3-container\">\n        <div class=\"w3-row\">\n            <div class=\"w3-twothird\">\n                <service-edit (onStopEditing)='onStopEditing($event);' [service]='service'></service-edit>\n            </div>\n            <div class='w3-third'>\n                <list-view (onItemSelect)='onItemSelect($event);' [items]='items' [title]='title'></list-view>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/visit-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='visit-placeholder'>\n    <div class='w3-container w3-card-4 w3-margin'>\n        <h3 id='visit-title' class=\"w3-text-teal\">Visits</h3>    \n        <div id='visit-list'>\n            <div *ngFor='let visit of visits' id='visit-instance'>\n                <i id='visit-elm' class='visit-element'>{{visit.location.name}} on {{visit.date_attended | date:'dd/MM/yyyy'}}</i>\n                <i (click)='delete(visit.visit_id);' class=\"w3-text-teal w3-button visit-delete-button\"  style=\"padding:16px 12px;\">(delete)</i>\n                <br/>\n            </div>\n        </div>\n    </div>\n</div>\n\n<delete-confirm [deleteModal]='deleteModal' (deleteModalEmitter)='closeDeleteModal($event)' [entity]='entity' [entityId]='visitId'></delete-confirm>"

/***/ }),

/***/ "../../../../../src/app/templates/visit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='w3-text-teal w3-margin'>\n    <table style='margin-left:auto;margin-right:auto;text-decoration:none;'>\n        <tr>\n            <td>\n                <input type=\"submit\" id='visit-row' (click)='addVisit();' class='w3-button w3-center w3-border w3-small visit-row' value='Add Visit'>\n            </td>\n            <td>\n                <div class=\"visit-location w3-small\">{{visit?.location?.name || 'Set Location'}}</div>\n                <div class=\"visit-project w3-small\">  {{visit?.project?.name || 'Set Project'}}</div>\n            </td>\n        </tr>\n    </table>\n    <div id='change-visit' class='change-visit w3-hover-opacity w3-center w3-small jono-button' (click)='visitModal = true;'>Set Default Visit</div>\n</div>\n<div  *ngIf=\"visitModal\" (click)='closeVisitModal($event);' id='change-visit-modal' class=\"w3-modal\">\n    <div class=\"w3-modal-content\">\n        <div class=\"w3-container\" style='padding-left:0px;padding-right:0px;'>\n            <div id='change-visit-form' class=\"w3-container w3-card-4 w3-text-yellow\" style=\"padding-bottom: 10px;\">\n                <h2 id='visit-reg-header' class=\"w3-center w3-text-teal\">Set Default Visit</h2>          \n                <div class=\"w3-row w3-section\">\n                    <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-map\"></i></div>\n                        <div class=\"w3-rest\">\n                            <select [(ngModel)]='visit.location_id' class=\"w3-input w3-border w3-round-medium location-dropdown\" id='visit-location' name=\"visit-location\" type=\"text\" placeholder=\"Location\">\n                                <option value=\"\" disabled selected hidden>Location</option>\n                                <option *ngFor=\"let location of locationList\" value=\"{{location.location_id}}\">{{location.name}}</option>\n                            </select>\n                        </div>\n                    </div>\n                <div class=\"w3-row w3-section\">\n                <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-\"></i></div>\n                    <div class=\"w3-rest\">\n                        <select [(ngModel)]='visit.project_id' class=\"w3-input w3-border w3-round-medium project-dropdown\" id='visit-project' name=\"visit-project\" type=\"text\" placeholder=\"Project\">\n                            <option value=\"\" disabled selected hidden>Project</option>\n                            <option *ngFor=\"let project of projectList\" value=\"{{project.project_id}}\">{{project.name}}</option>\n                        </select>\n                    </div>\n                </div>\n                <div class=\"w3-row w3-section\">\n                <div class=\"w3-col\" style=\"width:50px\"><i class=\"w3-xxlarge fa fa-calendar\"></i></div>\n                    <div class=\"w3-rest\">\n                        <input class=\"w3-input w3-border w3-round-medium date-input\" id='visit-date'  name=\"visit-date\" type=\"date\" placeholder=\"Visit Date\" min=\"1900-01-01\" max=\"2099-04-30\">\n                        <i class=\"w3-right w3-text-teal w3-small\" style='margin-right:3px;'>optional</i>\n                    </div>\n                </div>\n                <div id='visit-error' class='w3-left w3-text-red'></div>\n                <input (click)='defaultVisit();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Set Default Visit\" style='margin-left:10px;'>\n                <input id='visit-submit' (click)='addAndSetVisit();' class=\"w3-button w3-right w3-text-teal w3-border\" type=\"submit\" value=\"Add Visit\">\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/visit-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VisitListComponent = (function () {
    function VisitListComponent() {
        this.deleteModal = false;
        this.entity = 'visit';
    }
    VisitListComponent.prototype.closeDeleteModal = function (event) {
        this.deleteModal = event;
    };
    VisitListComponent.prototype.delete = function (visitId) {
        this.visitId = visitId;
        this.deleteModal = true;
    };
    return VisitListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Array)
], VisitListComponent.prototype, "visits", void 0);
VisitListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'visit-list',
        template: __webpack_require__("../../../../../src/app/templates/visit-list.component.html"),
    })
], VisitListComponent);

//# sourceMappingURL=visit-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/visit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__visit__ = __webpack_require__("../../../../../src/app/visit.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__("../../../../../src/app/project.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__location__ = __webpack_require__("../../../../../src/app/location.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__visit_service__ = __webpack_require__("../../../../../src/app/visit.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__location_service__ = __webpack_require__("../../../../../src/app/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__project_service__ = __webpack_require__("../../../../../src/app/project.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var VisitComponent = (function () {
    function VisitComponent(visitService, locationService, projectService) {
        this.visitService = visitService;
        this.locationService = locationService;
        this.projectService = projectService;
        this.visitCookieKey = 'playbus_visit';
        this.visitModal = false;
        locationService.init();
        projectService.init();
    }
    VisitComponent.prototype.closeVisitModal = function (event) {
        if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
        }
    };
    VisitComponent.prototype.defaultVisit = function () {
        var defaultVisit = new __WEBPACK_IMPORTED_MODULE_1__visit__["a" /* Visit */]();
        defaultVisit.location_id = this.visit.location_id;
        defaultVisit.project_id = this.visit.project_id;
        defaultVisit.location = new __WEBPACK_IMPORTED_MODULE_3__location__["a" /* Location */]();
        for (var _i = 0, _a = this.locationList; _i < _a.length; _i++) {
            var location = _a[_i];
            if (location.location_id == defaultVisit.location_id) {
                defaultVisit.location.name = location.name;
            }
        }
        defaultVisit.project = new __WEBPACK_IMPORTED_MODULE_2__project__["a" /* Project */]();
        for (var _b = 0, _c = this.projectList; _b < _c.length; _b++) {
            var project = _c[_b];
            if (project.project_id == defaultVisit.project_id) {
                defaultVisit.project.name = project.name;
            }
        }
        this.visit = defaultVisit;
        this.setCookie(this.visitCookieKey, JSON.stringify(defaultVisit));
        this.visitModal = false;
        location.reload();
    };
    VisitComponent.prototype.addAndSetVisit = function () {
        this.defaultVisit();
        this.addVisit();
        this.visitModal = false;
    };
    VisitComponent.prototype.addVisit = function () {
        if (this.childId) {
            this.visit.child_id = this.childId;
        }
        if (this.carerId) {
            this.visit.carer_id = this.carerId;
        }
        this.visit.family_id = this.familyId;
        if (this.visit.location_id) {
            this.visitService.addVisit(this.visit).then(function () { return location.reload(); });
        }
    };
    VisitComponent.prototype.ngOnInit = function () {
        var _this = this;
        var cook = this.getCookie(this.visitCookieKey);
        if (cook) {
            this.visit = JSON.parse(cook);
        }
        else {
            this.visit = new __WEBPACK_IMPORTED_MODULE_1__visit__["a" /* Visit */]();
        }
        this.locationList = this.locationService.staticLocationList;
        this.locationService.locationList$.subscribe(function (locations) {
            _this.locationList = locations;
        });
        this.projectList = this.projectService.staticProjectList;
        this.projectService.projectList$.subscribe(function (projects) {
            _this.projectList = projects;
        });
    };
    VisitComponent.prototype.getCookie = function (name) {
        return window.localStorage.getItem(name);
    };
    VisitComponent.prototype.deleteCookie = function (name) {
        window.localStorage.removeItem(name);
    };
    VisitComponent.prototype.setCookie = function (name, value) {
        window.localStorage.setItem(name, value);
    };
    return VisitComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], VisitComponent.prototype, "childId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], VisitComponent.prototype, "carerId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", String)
], VisitComponent.prototype, "familyId", void 0);
VisitComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'add-visit',
        template: __webpack_require__("../../../../../src/app/templates/visit.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__visit_service__["a" /* VisitService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__visit_service__["a" /* VisitService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__location_service__["a" /* LocationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__location_service__["a" /* LocationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__project_service__["a" /* ProjectService */]) === "function" && _c || Object])
], VisitComponent);

var _a, _b, _c;
//# sourceMappingURL=visit.component.js.map

/***/ }),

/***/ "../../../../../src/app/visit.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VisitService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitService = (function () {
    function VisitService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: this.headers, withCredentials: true });
    }
    VisitService.prototype.visitUrl = function () {
        return '/api/visit/create';
    };
    VisitService.prototype.addVisit = function (visit) {
        return this.http.post(this.visitUrl(), visit, this.options)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    VisitService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return VisitService;
}());
VisitService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], VisitService);

var _a;
//# sourceMappingURL=visit.service.js.map

/***/ }),

/***/ "../../../../../src/app/visit.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Visit; });
var Visit = (function () {
    function Visit() {
    }
    return Visit;
}());

//# sourceMappingURL=visit.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map