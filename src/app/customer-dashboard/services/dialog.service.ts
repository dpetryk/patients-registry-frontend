import { Injectable } from '@angular/core';
import moment from "moment-es6";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  selectedTimestamp: moment.Moment;
  confirmation: boolean;

  constructor() { }
}
