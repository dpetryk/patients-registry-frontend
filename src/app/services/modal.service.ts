import {Injectable} from '@angular/core';
import moment from 'moment-es6';
import {Patient} from '../models/patient.model';
import {Visit} from '../models/visit.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  selectedTimestamp: moment.Moment;

  constructor() {
  }

  setSelectedTimestamp(selectedTimestamp: moment.Moment) {
    this.selectedTimestamp = selectedTimestamp;
  }

}
