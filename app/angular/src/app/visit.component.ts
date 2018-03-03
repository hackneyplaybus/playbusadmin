import { Component, OnInit, Input } from '@angular/core';
import { Visit } from './visit';
import { Project } from './project';
import { Location } from './location';
import { VisitService } from './visit.service';
import { LocationService } from './location.service';
import { ProjectService } from './project.service';

@Component({
  selector: 'add-visit',
  templateUrl: `./templates/visit.component.html`,
})
export class VisitComponent implements OnInit{

  visit: Visit;
  private visitCookieKey = 'playbus_visit';
  visitModal = false;
  @Input() childId: string;
  @Input() carerId: string;
  @Input() familyId: string;

  locationList: Location[];
  projectList: Project[];

  closeVisitModal(event: Event): void{
      if (event.srcElement.classList.contains('w3-modal')) {
            this.visitModal = false;
      }
  }

  defaultVisit(): void {
    let defaultVisit = new Visit();
    defaultVisit.location_id = this.visit.location_id;    
    defaultVisit.project_id = this.visit.project_id;
    
    defaultVisit.location = new Location();
    for (let location of this.locationList) {
        if (location.location_id == defaultVisit.location_id) {
            defaultVisit.location.name = location.name;
        }
    }
    defaultVisit.project = new Project();
        for (let project of this.projectList) {
        if (project.project_id == defaultVisit.project_id) {
            defaultVisit.project.name = project.name;
        }
    }
    this.visit = defaultVisit
    this.setCookie(this.visitCookieKey, JSON.stringify(defaultVisit));
    this.visitModal = false;
    location.reload();
  }

  addAndSetVisit(): void {
    this.defaultVisit();
    this.addVisit();
    this.visitModal = false;
  }

  addVisit(): void {
    if (this.childId) {
        this.visit.child_id = this.childId;
    }
    if (this.carerId) {
        this.visit.carer_id = this.carerId;
    }

    this.visit.family_id = this.familyId;


    if (this.visit.location_id) {
        this.visitService.addVisit(this.visit).then(() => location.reload())
    }
  }

  ngOnInit():void {
      let cook = this.getCookie(this.visitCookieKey);
      if (cook) {
        this.visit = JSON.parse(cook) as Visit;
      } else {
          this.visit = new Visit();
      }

      this.locationList = this.locationService.staticLocationList;
        this.locationService.locationList$.subscribe(
          locations => {
            this.locationList = locations;
          });

        this.projectList = this.projectService.staticProjectList;
        this.projectService.projectList$.subscribe(
          projects => {
            this.projectList = projects;
          });
  }


  private getCookie(name: string): string{ 
      return window.localStorage.getItem(name);
  }

  private deleteCookie(name: string) {
      window.localStorage.removeItem(name);
  }

  private setCookie(name: string, value: string) {
      window.localStorage.setItem(name, value);
  }

  constructor(private visitService: VisitService, 
    private locationService: LocationService,
    private projectService: ProjectService){
      locationService.init();
      projectService.init();
  }
}
