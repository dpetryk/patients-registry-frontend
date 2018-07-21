import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
// import {ModalComponent} from './components/modal/modal.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SharedModule} from '../shared/shared.module';
import { ConfirmVisitDialogComponent } from './components/confirm-visit-dialog/confirm-visit-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalendarComponent,
    ConfirmVisitDialogComponent,
    // ModalComponent,
  ],
  entryComponents: [
    ConfirmVisitDialogComponent
  ]
})
export class CustomerDashboardModule { }
