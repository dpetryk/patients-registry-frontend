import {Injectable} from '@angular/core';
import moment from 'moment-es6';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  selectedHour: string;
  selectedDate: moment.Moment;


  constructor() {
  }

  setSelectedHour(hour: string) {
    this.selectedHour = hour;
  }

  setSelectedDate(selectedDate: moment.Moment) {
    this.selectedDate = selectedDate;
  }

}
