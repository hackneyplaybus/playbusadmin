import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router }  from '@angular/router';
import { Project } from './project'
import { ProjectService } from './project.service'
import { Item } from './item'


import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'project-view',
  templateUrl: `./templates/project.component.html`,
})
export class ProjectComponent implements OnInit{
    project = new Project();
    title = 'Projects';
    private items: Item[];
    private projects: Project[];

    ngOnInit(): void {

        this.projectService.getProjects()
            .then(projects => {
                this.projects = projects;
                this.items = []; 
                for (let project of projects) {                    
                    let item = new Item();
                    item.value = project.name;
                    item.id = project.project_id;
                    item.type = 'project';
                    this.items.push(item);
                }
            });
        
    }

    onStopEditing(val: boolean): void {
        this.project.project_id = '';
    }

    onItemSelect(item: Item): void {
        
        for (let project of this.projects) {
            if (project.project_id == item.id) {
                this.project = { ...project};
                break;
            }
        }
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private projectService: ProjectService
    ){}
}