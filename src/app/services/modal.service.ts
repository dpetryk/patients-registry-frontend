import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  selectedHour: string;
  selectedDate;


  constructor() {
  }

  setSelectedHour(hour: string) {
    this.selectedHour = hour;
  }

  setSelectedDate(selectedDate: Date) {
    this.selectedDate = selectedDate;
  }

}
