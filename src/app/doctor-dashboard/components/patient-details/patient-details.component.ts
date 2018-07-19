import { Component, OnInit } from '@angular/core';
import {Patient} from "../../../core/models/patient.model";
import {PatientService} from "../../../core/services/patient.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient: Patient;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {
  }

  ngOnInit() {
    this.getPatientById(this.route.snapshot.params.id);
  }

  getPatientById(id: number) {
    this.patientService.getPatientById(id).subscribe(
      data => {
        this.patient = data;
      },
      err => console.error(err),
    );
  }

}
