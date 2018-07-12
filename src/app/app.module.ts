import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {VisitService} from './services/visit.service';
import {VisitComponent} from './components/visit/visit.component';
import {VisitDetailsComponent} from './components/visit-details/visit-details.component';
import {AppRoutingModule} from './app-routing.module';
import {VisitDetailsEditComponent} from './components/visit-details-edit/visit-details-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PatientService} from './services/patient.service';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './components/modal/modal.component';
import {ModalService} from './services/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    VisitDetailsComponent,
    VisitDetailsEditComponent,
    HeaderComponent,
    FooterComponent,
    CalendarComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [VisitService, PatientService, ModalService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent]
})
export class AppModule {
}
