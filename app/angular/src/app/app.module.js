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
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var child_component_1 = require("./child.component");
var carer_component_1 = require("./carer.component");
var people_component_1 = require("./people.component");
var complete_name_service_1 = require("./complete-name.service");
var ethnicity_service_1 = require("./ethnicity.service");
var location_service_1 = require("./location.service");
var project_service_1 = require("./project.service");
var benefit_service_1 = require("./benefit.service");
var carer_service_1 = require("./carer.service");
var child_service_1 = require("./child.service");
var complete_name_component_1 = require("./complete-name.component");
var app_routing_module_1 = require("./app-routing.module");
var consent_component_1 = require("./consent.component");
var family_component_1 = require("./family.component");
var display_carer_component_1 = require("./display-carer.component");
var display_child_component_1 = require("./display-child.component");
var delete_component_1 = require("./delete.component");
var consent_service_1 = require("./consent.service");
var family_service_1 = require("./family.service");
var delete_service_1 = require("./delete.service");
var edit_note_service_1 = require("./edit-note.service");
var edit_note_component_1 = require("./edit-note.component");
var visit_component_1 = require("./visit.component");
var visit_service_1 = require("./visit.service");
var location_component_1 = require("./location.component");
var location_edit_component_1 = require("./location-edit.component");
var project_component_1 = require("./project.component");
var project_edit_component_1 = require("./project-edit.component");
var service_service_1 = require("./service.service");
var service_component_1 = require("./service.component");
var search_component_1 = require("./search.component");
var service_edit_component_1 = require("./service-edit.component");
var list_component_1 = require("./list.component");
var visit_list_component_1 = require("./visit-list.component");
var referral_service_1 = require("./referral.service");
var search_service_1 = require("./search.service");
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
            app_routing_module_1.AppRoutingModule,
            forms_1.FormsModule
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
            display_child_component_1.DisplayChildComponent,
            delete_component_1.DeleteComponent,
            edit_note_component_1.EditNoteComponent,
            visit_component_1.VisitComponent,
            location_component_1.LocationComponent,
            location_edit_component_1.LocationEditComponent,
            list_component_1.ListComponent,
            project_component_1.ProjectComponent,
            project_edit_component_1.ProjectEditComponent,
            search_component_1.SearchComponent,
            service_component_1.ServiceComponent,
            service_edit_component_1.ServiceEditComponent,
            visit_list_component_1.VisitListComponent
        ],
        providers: [
            complete_name_service_1.CompleteNameService,
            ethnicity_service_1.EthnicityService,
            location_service_1.LocationService,
            project_service_1.ProjectService,
            benefit_service_1.BenefitService,
            carer_service_1.CarerService,
            child_service_1.ChildService,
            consent_service_1.ConsentService,
            family_service_1.FamilyService,
            delete_service_1.DeleteService,
            edit_note_service_1.EditNoteService,
            visit_service_1.VisitService,
            service_service_1.ServiceService,
            referral_service_1.ReferralService,
            search_service_1.SearchService,
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map