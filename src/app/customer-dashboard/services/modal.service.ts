import {Injectable} from '@angular/core';
import moment from 'moment-es6';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  selectedTimestamp: moment.Moment;
  confirmation: boolean;

  constructor() {
  }

  // setSelectedTimestamp(selectedTimestamp: moment.Moment) {
  //   this.selectedTimestamp = selectedTimestamp;
  // }


}
