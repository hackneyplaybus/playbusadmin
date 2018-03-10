import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';

import { AppComponent }  from './app.component';
import { ChildComponent }  from './child.component';
import { CarerComponent }  from './carer.component';
import { PeopleComponent }  from './people.component';
import { CompleteNameService }  from './complete-name.service';
import { EthnicityService }  from './ethnicity.service';
import { LocationService }  from './location.service';
import { ProjectService } from './project.service'
import { BenefitService }  from './benefit.service';
import { CarerService }  from './carer.service';
import { ChildService }  from './child.service';
import { CompleteNameComponent }  from './complete-name.component';
import { AppRoutingModule }     from './app-routing.module';
import { ConsentComponent } from './consent.component';
import { FamilyComponent } from './family.component';
import { DisplayCarerComponent } from './display-carer.component';
import { DisplayChildComponent } from './display-child.component';
import { DeleteComponent } from './delete.component';
import { ConsentService } from './consent.service';
import { FamilyService } from './family.service';
import { DeleteService } from './delete.service';
import { EditNoteService } from './edit-note.service';
import { EditNoteComponent } from './edit-note.component';
import { VisitComponent } from './visit.component';
import { VisitService } from './visit.service';
import { LocationComponent } from './location.component';
import { LocationEditComponent } from './location-edit.component';
import { ProjectComponent } from './project.component';
import { ProjectEditComponent } from './project-edit.component';
import { ServiceService } from './service.service';
import { ServiceComponent } from './service.component';
import { SearchComponent } from './search.component';
import { ServiceEditComponent } from './service-edit.component';
import { ListComponent } from './list.component';
import { VisitListComponent } from './visit-list.component';
import { ReferralService } from './referral.service';
import { SearchService } from './search.service';
import { Md2Module }  from 'md2';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [ 
    BrowserModule,
    HttpModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,       
    Md2Module,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
       apiKey: 'AIzaSyA4ktXx-suNdhB-3Ithks2pWCgo6fvSbio'
    }),
    AgmJsMarkerClustererModule
  ],
  declarations: [ 
    AppComponent,
    ChildComponent,
    PeopleComponent,
    CarerComponent,
    CompleteNameComponent,
    ConsentComponent,
    FamilyComponent,
    DisplayCarerComponent,
    DisplayChildComponent,
    DeleteComponent,
    EditNoteComponent,
    VisitComponent,
    LocationComponent,
    LocationEditComponent,
    ListComponent,
    ProjectComponent,
    ProjectEditComponent,
    SearchComponent,
    ServiceComponent,
    ServiceEditComponent,    
    VisitListComponent
  ],
  providers: [
    CompleteNameService,
    EthnicityService,
    LocationService,
    ProjectService,
    BenefitService,
    CarerService,
    ChildService,
    ConsentService,
    FamilyService,
    DeleteService,
    EditNoteService,
    VisitService,
    ServiceService,
    ReferralService,
    SearchService,        
    GoogleMapsAPIWrapper
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
