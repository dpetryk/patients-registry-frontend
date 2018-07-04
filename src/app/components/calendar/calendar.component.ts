import {Component, OnInit} from '@angular/core';
import moment from 'moment-es6';
import {ModalComponent} from "../modal/modal.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  currentDate = moment();
  weekDays = [];
  timeTable = ['8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30', '9:30 - 10:00', '10:00 - 10:30',
    '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00',
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00',
    '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
    this.generateWeek();
  }

  generateWeek() {
    for (let i = 0; i < 7; i++) {
      this.weekDays[i] = moment(this.currentDate).startOf("isoWeek");
      this.weekDays[i].add(i, "day")
    }
  }

  prevWeek(event: MouseEvent): void {
    event.preventDefault();
    this.currentDate = moment(this.currentDate).subtract(1, 'weeks');
    this.generateWeek();
  }

  nextWeek(event: MouseEvent): void {
    event.preventDefault();
    this.currentDate = moment(this.currentDate).add(1, 'weeks');
    this.generateWeek();
  }

  openSummary() {
    this.modalService.open(ModalComponent,{centered: true});
  }
}
