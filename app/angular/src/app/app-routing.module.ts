import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent }   from './people.component';
import { ConsentComponent }   from './consent.component';
import { FamilyComponent }   from './family.component';
import { LocationComponent }   from './location.component';
import { ProjectComponent }   from './project.component';
import { ServiceComponent } from './service.component';
import { SearchComponent } from './search.component';
import { ReportComponent } from './report.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'consent', component: ConsentComponent },
  { path: 'family/:familyId',  component: FamilyComponent },
  { path: 'locations', component: LocationComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'services', component: ServiceComponent },
  { path: 'search', component: SearchComponent },
  { path: 'report', component: ReportComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}