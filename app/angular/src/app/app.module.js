"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var carer_component_1 = require("./carer.component");
var people_component_1 = require("./people.component");
var complete_name_service_1 = require("./complete-name.service");
var ethnicity_service_1 = require("./ethnicity.service");
var benefit_service_1 = require("./benefit.service");
var carer_service_1 = require("./carer.service");
var child_service_1 = require("./child.service");
var complete_name_component_1 = require("./complete-name.component");
var app_routing_module_1 = require("./app-routing.module");
var consent_component_1 = require("./consent.component");
var family_component_1 = require("./family.component");
var display_carer_component_1 = require("./display-carer.component");
var display_child_component_1 = require("./display-child.component");
var consent_service_1 = require("./consent.service");
var family_service_1 = require("./family.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            child_component_1.ChildComponent,
            people_component_1.PeopleComponent,
            carer_component_1.CarerComponent,
            complete_name_component_1.CompleteNameComponent,
            consent_component_1.ConsentComponent,
            family_component_1.FamilyComponent,
            display_carer_component_1.DisplayCarerComponent,
            display_child_component_1.DisplayChildComponent
        ],
        providers: [
            complete_name_service_1.CompleteNameService,
            ethnicity_service_1.EthnicityService,
            benefit_service_1.BenefitService,
            carer_service_1.CarerService,
            child_service_1.ChildService,
            consent_service_1.ConsentService,
            family_service_1.FamilyService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map