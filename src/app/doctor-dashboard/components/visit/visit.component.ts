import {Component, OnInit} from '@angular/core';
import {VisitService} from '../../../core/services/visit.service';
import moment from 'moment-es6';
import {ActivatedRoute} from "@angular/router";
import {Visit} from "../../../core/models/visit.model";
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  visits;
  visitsByDay;
  currentDate;
  _filterString;
  filteredVisitsByDay;

  get filterString(): string {
    return this._filterString;
  }

  set filterString(value: string) {
    this._filterString = value;
    this.filteredVisitsByDay = this.filterString ? this.performFilter(this.filterString) : this.visitsByDay;
  }

  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.currentDate = moment();
    this.route.data.subscribe(data => {
      this.visits = data.visits;
    });
    this.visitsByDay = this.viewVisitsByDay();
    this.filteredVisitsByDay = this.visitsByDay;
  }

  todayVisits() {
    this.currentDate = moment();
    this.viewVisitsByDay();
  }

  nextDayVisits() {
    this.currentDate.add(1, 'days');
    this.viewVisitsByDay();
    this.refreshFilter();
  }

  prevDayVisits() {
    this.currentDate.subtract(1, 'days');
    this.viewVisitsByDay();
    this.refreshFilter();
  }

  refreshFilter() {
    this.filteredVisitsByDay = this.visitsByDay;
    this.filteredVisitsByDay = this.filterString ? this.performFilter(this.filterString) : this.visitsByDay;
  }

  getVisits() {
    this.visitService.getVisits().subscribe(
      data => {
        this.visits = data;
      },
      err => {
        console.error(err);
      }
    );
  }

  viewVisitsByDay() {
    let visitsOfDay = [];
    this.visits.forEach(visit => {
      if (moment(visit.visitDate).isSame(this.currentDate, "day")) {
        visitsOfDay.push(visit);
      }
    });
    return this.visitsByDay = visitsOfDay;
  }

  performFilter(filterBy: string): Visit[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.visitsByDay.filter((visit: Visit) => visit.patient.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  dateChangeEvent(event: MatDatepickerInputEvent<Date>) {
    this.currentDate = moment(event.value) ;
    this.viewVisitsByDay();
    this.refreshFilter();
  }

}
