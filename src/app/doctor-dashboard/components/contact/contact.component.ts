import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../core/services/patient.service";
import {Patient} from "../../../core/models/patient.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private patientService: PatientService, private route: ActivatedRoute,) {
  }

  patient: Patient;

  ngOnInit() {
    this.getPatient(this.route.snapshot.params.id)
  }

  getPatient(id) {
    this.patientService.getPatientById(id).subscribe(
      data => this.patient = data,
      err => console.log(err))
  }

  toggleVip(patient: Patient, id){
      patient.vip = !patient.vip;
      this.patientService.editPatient(id, patient).subscribe(
         data => console.log(data),
        error => console.log(error))
  }

}
