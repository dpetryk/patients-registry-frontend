import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { VisitComponent } from './components/visit/visit.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { VisitHistoryComponent } from './components/visit-history/visit-history.component';
import { PatientsListComponent } from './components/patients-list/patients-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { VisitEntryComponent } from './components/visit-entry/visit-entry.component';
import { VisitEntryEditComponent } from './components/visit-entry/visit-entry-edit/visit-entry-edit.component';

@NgModule({
  imports: [
    CoreModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    VisitComponent,
    PatientDetailsComponent,
    VisitHistoryComponent,
    PatientsListComponent,
    ContactComponent,
    VisitEntryComponent,
    VisitEntryEditComponent
  ],
  entryComponents: [
    ContactComponent
  ]
})
export class DoctorDashboardModule { }
