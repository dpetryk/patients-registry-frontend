import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Patient} from "../../../core/models/patient.model";
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {PatientService} from "../../../core/services/patient.service";

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

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
    this.patientService.getPatients().subscribe(
      data => {this.dataSource = new MatTableDataSource<Patient>(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        },
      error => console.log(error))
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
