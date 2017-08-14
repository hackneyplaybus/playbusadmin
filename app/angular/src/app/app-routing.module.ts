import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PeopleComponent }   from './people.component';
import { ConsentComponent }   from './consent.component';
import { FamilyComponent }   from './family.component';
import { LocationComponent }   from './location.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'consent', component: ConsentComponent },
  { path: 'family/:familyId',  component: FamilyComponent },
  { path: 'locations', component: LocationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}