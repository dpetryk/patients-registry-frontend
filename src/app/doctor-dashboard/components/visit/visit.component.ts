import {Component, OnInit, ViewChild} from '@angular/core';
import {VisitService} from '../../../core/services/visit.service';
import moment from 'moment-es6';
import {ActivatedRoute} from "@angular/router";
import {Visit} from "../../../core/models/visit.model";
import {MatDatepickerInputEvent, MatSort, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.scss']
})
export class VisitComponent implements OnInit {

  visits;
  visitsByDay: MatTableDataSource<Visit>;
  currentDate;
  displayedColumns = ['time', 'date', 'vip', 'lastName', 'firstName', 'status', 'enter'];

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

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
  }

  todayVisits() {
    this.currentDate = moment();
    this.viewVisitsByDay();
  }

  nextDayVisits() {
    this.currentDate.add(1, 'days');
    this.viewVisitsByDay();
  }

  prevDayVisits() {
    this.currentDate.subtract(1, 'days');
    this.viewVisitsByDay();
  }

  applyFilter(filterValue: string) {
    this.visitsByDay.filter = filterValue.trim().toLowerCase();
  }

  viewVisitsByDay() {
    let visitsOfDay = [];
    this.visits.forEach(visit => {
      if (moment(visit.visitDate).isSame(this.currentDate, "day")) {
        visitsOfDay.push(visit);
      }
    });
    return this.visitsByDay = new MatTableDataSource<Visit>(visitsOfDay);
  }

  dateChangeEvent(event: MatDatepickerInputEvent<Date>) {
    this.currentDate = moment(event.value) ;
    this.viewVisitsByDay();
  }

}
