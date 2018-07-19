import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {VisitDetailsComponent} from './doctor-dashboard/components/visit-details/visit-details.component';
import {VisitComponent} from './doctor-dashboard/components/visit/visit.component';
import {VisitDetailsEditComponent} from './doctor-dashboard/components/visit-details-edit/visit-details-edit.component';
import {CalendarComponent} from './customer-dashboard/components/calendar/calendar.component';
import {VisitsResolver} from "./core/services/visits.resolver";
import {PatientDetailsComponent} from "./doctor-dashboard/components/patient-details/patient-details.component";


const routes: Routes = [
  {path: '', redirectTo: '/visits', pathMatch: 'full'},
  {path: 'visits', component: VisitComponent, resolve: {visits: VisitsResolver}},
  {path: 'visits/create', component: VisitDetailsEditComponent},
  {path: 'visits/:id', component: VisitDetailsComponent},
//  {path: 'patients', component: PatientsComponent},
  {path: 'patients/:id', component: PatientDetailsComponent},
  {path: 'calendar', component: CalendarComponent, resolve: {visits: VisitsResolver}}
];


@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
