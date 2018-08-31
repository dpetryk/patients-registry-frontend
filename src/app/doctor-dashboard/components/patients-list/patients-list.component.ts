import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from "@angular/material";

import { Patient } from "../../../core/models/patient.model";
import { PatientService } from "../../../core/services/patient.service";
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.scss']
})
export class PatientsListComponent implements OnInit {

  displayedColumns = ['id', 'vip', 'lastName', 'firstName', 'pesel', 'options'];
  dataSource: MatTableDataSource<Patient>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private patientService: PatientService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Patient>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error))
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openContactDialog(event: Event, patientId: number) {
    event.preventDefault();
    let dialogRef = this.dialog.open(ContactComponent, {
      width: '500px',
      data: patientId
    });
  }
} 
  
