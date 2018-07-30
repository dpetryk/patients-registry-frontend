import {Component, OnInit, AfterViewInit} from '@angular/core';
import {MatDialog, MatSnackBar} from '@angular/material';
import {ActivatedRoute} from "@angular/router";

import {VisitService} from '../../../core/services/visit.service';
import {Visit} from '../../../core/models/visit.model';
import {ConfirmVisitDialogComponent} from "../confirm-visit-dialog/confirm-visit-dialog.component";
import {DialogService} from "../../services/dialog.service";
import moment from 'moment-es6';
import {SnackBarComponent} from "../snack-bar/snack-bar.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  currentDate = moment();
  weekDays = [];
  workDays = [];
  slots = [];
  visits;
  timeTable = ['8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30', '9:30 - 10:00', '10:00 - 10:30',
    '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00',
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00',
    '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];

  constructor(
    private dialogService: DialogService,
    private visitService: VisitService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {
  }

  openConfirmVisitDialog() {
    let dialogRef = this.dialog.open(ConfirmVisitDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog was closed', result);
    if(result){
      this.openSnackBar('Visit registered');
    }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 4000,
    })
  }

  ngOnInit() {
    this.generateWeek();
    this.route.data.subscribe(
      data => this.visits = data.visits,
      error => console.log(error)
    )
  }

  ngAfterViewInit() {
    this.assignSlotsArray();
    this.checkIfWeekContainsVisits();
  }

  generateWeek(): void {
    for (let i = 0; i < 7; i++) {
      this.weekDays[i] = moment(this.currentDate).startOf('isoWeek');
      this.weekDays[i].add(i, 'day');
      this.generateWorkDays();
    }
  }

  generateWorkDays() {
    for (let i = 0; i < this.weekDays.length - 1; i++) {
      this.workDays[i] = this.weekDays[i];
    }
  }

  prevWeek(event: MouseEvent): void { //poprawic bo nie zaznacza zajetych slotow
    event.preventDefault();
    this.currentDate = moment(this.currentDate).subtract(1, 'weeks');
    this.generateWeek();
    this.clearTakenSlots();
    this.checkIfWeekContainsVisits();
  }

  nextWeek(event: MouseEvent): void { //poprawic bo nie zaznacza zajetych slotow
    event.preventDefault();
    this.currentDate = moment(this.currentDate).add(1, 'weeks');
    this.generateWeek();
    this.clearTakenSlots();
    this.checkIfWeekContainsVisits();
  }

  handleRegistryConfirmation(event: MouseEvent, workDay: moment.Moment, time: string): void {
    if ((<HTMLElement>event.target).classList.contains('taken')) {
      this.dialogService.confirmation = false;
      this.openConfirmVisitDialog();
    } else {
      this.dialogService.confirmation = true;
      this.readSelectedTimestamp(workDay, time);
      this.openConfirmVisitDialog();
    }
  }

  checkIfWeekContainsVisits() {
    for (let i = 0; i < this.visits.length; i++) {
      for (let j = 0; j < this.weekDays.length - 1; j++) {
        if (moment(this.visits[i].visitDate).isSame(this.weekDays[j], "day")) {
          this.markTakenSlot(this.visits[i]);
        }else{
        }
      }
    }
  }

  assignSlotsArray() {
    let slots = document.querySelectorAll('.slot');
    let slots2D = [];
    let index = 0;
    for (let i = 0; i < this.timeTable.length; i++) {
      slots2D.push([]);
    }
    for (let i = 0; i < this.timeTable.length; i++) {
      for (let j = slots2D[i].length; j < this.weekDays.length - 1; j++) {
        slots2D[i].push(slots[index]);
        index++;
      }
    }
    this.slots = slots2D;
  }

  markTakenSlot(visit: Visit) {
    let hourIndex, dayIndex = 0;
    for (dayIndex; dayIndex < this.weekDays.length - 1; dayIndex++) {
      hourIndex = 0;
      if (new Date(visit.visitDate).getDate() === this.weekDays[dayIndex].toDate().getDate()) {
        hourIndex = (new Date(visit.visitDate).getUTCHours() - 8) * 2;
        if (hourIndex < 0) {
          continue;
        }
        if (new Date(visit.visitDate).getMinutes() >= 30) {
          hourIndex++;
        }
        if (hourIndex > this.slots.length) {
          continue;
        }
        this.slots[hourIndex][dayIndex].classList.add('taken');
      }
    }
  }

  clearTakenSlots() {
    Array.from(document.querySelectorAll('.taken')).forEach((slot) => {
      slot.classList.remove('taken');
    });
  }

  readSelectedTimestamp(workDay: moment.Moment, timex: string): void {
    let hoursToAdd = 0;
    let dayIndex = workDay.day() - 1;
    const selectedDate = moment(workDay);
    const time = timex;
    if (time.substr(1, 1) === ':') {
      hoursToAdd = parseInt(time.substr(0, 1), 10);
      if (time.substr(2, 1) === '3') {
        hoursToAdd += 0.5;
      }
    } else {
      hoursToAdd = parseInt(time.substr(0, 2), 10);
      if (time.substr(3, 1) === '3') {
        hoursToAdd += 0.5;
      }
    }
    selectedDate.add(hoursToAdd, 'hours');
    this.dialogService.selectedTimestamp = selectedDate;
  }
}

