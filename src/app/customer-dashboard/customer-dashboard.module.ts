import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SharedModule} from '../shared/shared.module';
import { ConfirmVisitDialogComponent } from './components/confirm-visit-dialog/confirm-visit-dialog.component';
import {SnackBarComponent} from "./components/snack-bar/snack-bar.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalendarComponent,
    ConfirmVisitDialogComponent,
    SnackBarComponent
  ],
  entryComponents: [
    ConfirmVisitDialogComponent, SnackBarComponent
  ]
})
export class CustomerDashboardModule { }
