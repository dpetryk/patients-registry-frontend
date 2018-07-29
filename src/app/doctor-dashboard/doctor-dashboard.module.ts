import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {VisitDetailsComponent} from './components/visit-details/visit-details.component';
import {VisitComponent} from './components/visit/visit.component';
import {CoreModule} from '../core/core.module';
import {VisitDetailsEditComponent} from './components/visit-details-edit/visit-details-edit.component';
import {SharedModule} from '../shared/shared.module';
import {PatientDetailsComponent} from './components/patient-details/patient-details.component';
import {VisitHistoryComponent} from './components/visit-history/visit-history.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    VisitComponent,
    VisitDetailsComponent,
    VisitDetailsEditComponent,
    PatientDetailsComponent,
    VisitHistoryComponent,
    PatientsListComponent]
})
export class DoctorDashboardModule { }
