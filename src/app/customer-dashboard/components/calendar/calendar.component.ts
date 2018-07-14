import {Component, OnInit, AfterViewInit} from '@angular/core';
import moment from 'moment-es6';
import {ModalComponent} from '../modal/modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from '../../services/modal.service';
import {VisitService} from '../../../core/services/visit.service';
import {Visit} from '../../../core/models/visit.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit, AfterViewInit {

  currentDate = moment().utc();
  weekDays = [];
  slots = [];
  timeTable = ['8:00 - 8:30', '8:30 - 9:00', '9:00 - 9:30', '9:30 - 10:00', '10:00 - 10:30',
    '10:30 - 11:00', '11:00 - 11:30', '11:30 - 12:00', '12:00 - 12:30', '12:30 - 13:00',
    '13:00 - 13:30', '13:30 - 14:00', '14:00 - 14:30', '14:30 - 15:00', '15:00 - 15:30', '15:30 - 16:00',
    '16:00 - 16:30', '16:30 - 17:00', '17:00 - 17:30', '17:30 - 18:00'];

  constructor(
    private ngbModal: NgbModal,
    private modalService: ModalService,
    public visitService: VisitService
  ) {
  }

  ngOnInit() {
    this.generateWeek();
  }

  ngAfterViewInit() {
    this.assignSlotsArray();
    this.readRegisteredVisits();
  }

  generateWeek(): void {
    for (let i = 0; i < 7; i++) {
      this.weekDays[i] = moment(this.currentDate).startOf('isoWeek');
      this.weekDays[i].add(i, 'day');
    }
  }

  prevWeek(event: MouseEvent): void {
    event.preventDefault();
    this.currentDate = moment(this.currentDate).subtract(1, 'weeks');
    this.generateWeek();
    this.clearTakenSlots();
    this.readRegisteredVisits();
  }

  nextWeek(event: MouseEvent): void {
    event.preventDefault();
    this.currentDate = moment(this.currentDate).add(1, 'weeks');
    this.generateWeek();
    this.clearTakenSlots();
    this.readRegisteredVisits();
  }

  openSummary(): void {
    this.ngbModal.open(ModalComponent, {centered: true});
  }

  handleRegistryConfirmation(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('taken')) {

      this.modalService.confirmation = false;
    } else {
      this.modalService.confirmation = true;
    }
    this.readSelectedTimestamp(event);
    this.openSummary();
  }

  readRegisteredVisits() {
    this.visitService.getVisits().subscribe(visits => {
      this.checkIfWeekContainsVisits(visits);
    });
  }

  checkIfWeekContainsVisits(visits: Visit[]) {
    for (let i = 0; i < visits.length; i++) {
      for (let j = 0; j < this.weekDays.length - 1; j++) {
        if (this.compareDatesWithoutTime(new Date(visits[i].visitDate), (<moment.Moment>this.weekDays[j]).toDate())) {
          this.markTakenSlot(visits[i]);
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
        if (new Date(visit.visitDate).getUTCMinutes() >= 30) {
          hourIndex++;
        }
        if (hourIndex > this.slots.length) {
          continue;
        }
        this.slots[hourIndex][dayIndex].classList.add('taken');
      } else {
      }
    }
  }

  clearTakenSlots() {
    Array.from(document.querySelectorAll('.taken')).forEach((slot) => {
      slot.classList.remove('taken');
    });
  }


  compareDatesWithoutTime(dateOne: Date, dateTwo: Date): boolean {
    if (dateOne.getUTCFullYear() === dateTwo.getUTCFullYear()) {
      if (dateOne.getUTCMonth() === dateTwo.getUTCMonth()) {
        if (dateOne.getUTCDate() === dateTwo.getUTCDate()) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  readSelectedTimestamp(event: MouseEvent): void {
    let hoursToAdd = 0;
    let selectedCell: HTMLElement = (<HTMLElement>event.target);
    let dayIndex = 0;
    while ((selectedCell = <HTMLElement>selectedCell.previousSibling)) {
      dayIndex++;
    }
    const selectedDate = moment(this.weekDays[dayIndex - 2]);
    const time = (<HTMLElement>event.target).parentElement.innerText;
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
    this.modalService.setSelectedTimestamp(selectedDate);
  }
}
