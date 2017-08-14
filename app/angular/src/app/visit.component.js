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
var visit_1 = require("./visit");
var visit_service_1 = require("./visit.service");
var location_service_1 = require("./location.service");
var project_service_1 = require("./project.service");
var VisitComponent = (function () {
    function VisitComponent(visitService, locationService, projectService) {
        this.visitService = visitService;
        this.locationService = locationService;
        this.projectService = projectService;
        this.visitCookieKey = 'visit';
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
        var defaultVisit = new visit_1.Visit();
        defaultVisit.location_id = this.visit.location_id;
        defaultVisit.project_id = this.visit.project_id;
        this.setCookie(this.visitCookieKey, JSON.stringify(defaultVisit));
        this.visitModal = false;
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
            this.visit = new visit_1.Visit();
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
        var ca = document.cookie.split(';');
        var caLen = ca.length;
        var cookieName = name + "=";
        var c;
        for (var i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    };
    VisitComponent.prototype.deleteCookie = function (name) {
        this.setCookie(name, '');
    };
    VisitComponent.prototype.setCookie = function (name, value) {
        document.cookie = name + '=' + value + ";";
    };
    return VisitComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VisitComponent.prototype, "childId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VisitComponent.prototype, "carerId", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], VisitComponent.prototype, "familyId", void 0);
VisitComponent = __decorate([
    core_1.Component({
        selector: 'add-visit',
        templateUrl: "./templates/visit.component.html",
    }),
    __metadata("design:paramtypes", [visit_service_1.VisitService,
        location_service_1.LocationService,
        project_service_1.ProjectService])
], VisitComponent);
exports.VisitComponent = VisitComponent;
//# sourceMappingURL=visit.component.js.map