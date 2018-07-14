import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    CalendarComponent,
    ModalComponent,
  ]
})
export class CustomerDashboardModule { }
