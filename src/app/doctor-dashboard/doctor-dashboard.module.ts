import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VisitDetailsComponent} from './components/visit-details/visit-details.component'
import {VisitComponent} from './components/visit/visit.component';
import {CoreModule} from "../core/core.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {VisitDetailsEditComponent} from "./components/visit-details-edit/visit-details-edit.component";
import {SharedModule} from "../shared/shared.module";

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
    VisitDetailsEditComponent]
})
export class DoctorDashboardModule { }
