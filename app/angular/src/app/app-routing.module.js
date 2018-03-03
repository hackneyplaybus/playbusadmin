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
var people_component_1 = require("./people.component");
var consent_component_1 = require("./consent.component");
var family_component_1 = require("./family.component");
var location_component_1 = require("./location.component");
var project_component_1 = require("./project.component");
var service_component_1 = require("./service.component");
var search_component_1 = require("./search.component");
var routes = [
    { path: '', component: people_component_1.PeopleComponent },
    { path: 'consent', component: consent_component_1.ConsentComponent },
    { path: 'family/:familyId', component: family_component_1.FamilyComponent },
    { path: 'locations', component: location_component_1.LocationComponent },
    { path: 'projects', component: project_component_1.ProjectComponent },
    { path: 'services', component: service_component_1.ServiceComponent },
    { path: 'search', component: search_component_1.SearchComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map