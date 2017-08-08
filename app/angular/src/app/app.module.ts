import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './app.component';
import { ChildComponent }  from './child.component';
import { CarerComponent }  from './carer.component';
import { PeopleComponent }  from './people.component';
import { CompleteNameService }  from './complete-name.service';
import { EthnicityService }  from './ethnicity.service';
import { BenefitService }  from './benefit.service';
import { CarerService }  from './carer.service';
import { ChildService }  from './child.service';
import { CompleteNameComponent }  from './complete-name.component';
import { AppRoutingModule }     from './app-routing.module';
import { ConsentComponent } from './consent.component';
import { FamilyComponent } from './family.component';
import { DisplayCarerComponent } from './display-carer.component';
import { DisplayChildComponent } from './display-child.component';
import { ConsentService } from './consent.service';
import { FamilyService } from './family.service';

@NgModule({
  imports:      [ 
    BrowserModule,
    HttpModule,
    AppRoutingModule
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
    DisplayChildComponent
  ],
  providers: [
    CompleteNameService,
    EthnicityService,
    BenefitService,
    CarerService,
    ChildService,
    ConsentService,
    FamilyService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
