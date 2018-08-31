import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PatientService } from "../../../core/services/patient.service";
import { Patient } from "../../../core/models/patient.model";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<ContactComponent>,
    @Inject(MAT_DIALOG_DATA) public data) {
  }

  patient: Patient;

  ngOnInit() {
    // this.getPatient(this.route.snapshot.params.id)
    this.getPatient(this.data)
  }

  getPatient(id) {
    this.patientService.getPatientById(id).subscribe(
      data => this.patient = data,
      err => console.log(err))
  }

  toggleVip(patient: Patient, id) {
    patient.vip = !patient.vip;
    this.patientService.editPatient(id, patient).subscribe(
      data => console.log(data),
      error => console.log(error))
  }

  dismiss() {
    this.dialogRef.close(null);

  }
}
