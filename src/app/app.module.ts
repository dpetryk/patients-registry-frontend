import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {VisitService} from './core/services/visit.service';
import {VisitComponent} from './doctor-dashboard/components/visit/visit.component';
import {VisitDetailsComponent} from './doctor-dashboard/components/visit-details/visit-details.component';
import {AppRoutingModule} from './app-routing.module';
import {VisitDetailsEditComponent} from './doctor-dashboard/components/visit-details-edit/visit-details-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PatientService} from './core/services/patient.service';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {CalendarComponent} from './customer-dashboard/components/calendar/calendar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './customer-dashboard/components/modal/modal.component';
import {ModalService} from './customer-dashboard/services/modal.service';
import {CustomerDashboardModule} from "./customer-dashboard/customer-dashboard.module";
import {DoctorDashboardModule} from "./doctor-dashboard/doctor-dashboard.module";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomerDashboardModule,
    DoctorDashboardModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}
