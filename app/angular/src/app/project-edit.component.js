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
var project_1 = require("./project");
var project_service_1 = require("./project.service");
require("rxjs/add/operator/switchMap");
var ProjectEditComponent = (function () {
    function ProjectEditComponent(route, router, projectService) {
        this.route = route;
        this.router = router;
        this.projectService = projectService;
        this.onStopEditing = new core_1.EventEmitter();
        this._project = new project_1.Project();
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
    core_1.Input(),
    __metadata("design:type", project_1.Project),
    __metadata("design:paramtypes", [project_1.Project])
], ProjectEditComponent.prototype, "project", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ProjectEditComponent.prototype, "onStopEditing", void 0);
ProjectEditComponent = __decorate([
    core_1.Component({
        selector: 'project-edit',
        templateUrl: "./templates/project-edit.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        project_service_1.ProjectService])
], ProjectEditComponent);
exports.ProjectEditComponent = ProjectEditComponent;
//# sourceMappingURL=project-edit.component.js.map