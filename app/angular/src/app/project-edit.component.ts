import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Project } from './project'
import { ProjectService } from './project.service'


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'project-edit',
  templateUrl: `./templates/project-edit.component.html`,
})
export class ProjectEditComponent implements OnInit{
    @Input() 
    public set project(val: Project) {
      this._project = val;
      this.isEditing = this._project.project_id != undefined && this._project.project_id != ''
    }  
    public get project(): Project {
        return this._project;
    }  
    
    @Output() onStopEditing = new EventEmitter<boolean>();

    _project = new Project();
    private title: string;
    isEditing = false;
    private deleteModal = false;
    entity = 'project';
    
    closeDeleteModal(event: boolean): void {
      this.deleteModal = event;
    }

    ngOnInit(): void {

    }

    addProject(): void {
        this.projectService.addProject(this._project).then(() => location.reload());
    }

    stopEditing():  void {
        this._project.project_id = '';
        this.project = this._project;
        this.onStopEditing.next(true);
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ){}
}