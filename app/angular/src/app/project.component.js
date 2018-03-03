"use strict";
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var project_1 = require("./project");
var project_service_1 = require("./project.service");
var item_1 = require("./item");
require("rxjs/add/operator/switchMap");
var ProjectComponent = (function () {
    function ProjectComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.project = new project_1.Project();
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
                var item = new item_1.Item();
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
    core_1.Component({
        selector: 'project-view',
        templateUrl: "./templates/project.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_2.Router,
        project_service_1.ProjectService])
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
//# sourceMappingURL=project.component.js.map