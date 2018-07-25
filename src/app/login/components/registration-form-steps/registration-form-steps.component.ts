import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormDialog} from "../form-dialog/form-dialog.component";
import {MatDialog} from "@angular/material";
import {PatientService} from "../../../core/services/patient.service";
import {Patient} from "../../../core/models/patient.model";
import {Address} from "../../../core/models/address.model";

@Component({
  selector: 'app-registration-form-steps',
  templateUrl: './registration-form-steps.component.html',
  styleUrls: ['./registration-form-steps.component.scss']
})
export class RegistrationFormStepsComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  patient: Patient;
  address: Address;

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private patientService: PatientService) {
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      pesel: ['', [Validators.required, Validators.pattern('^\d{11}$')]]
    });
    this.secondFormGroup = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(2)]],
      street: ['', [Validators.required, Validators.minLength(2)]],
      postal: ['', [Validators.required, Validators.minLength(5)]],
      house: ['', Validators.required],
      apartment: ['']
    });
    this.thirdFormGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.minLength(7)]],
      city: ['', [Validators.required, Validators.minLength(2)]],
      termsAndConditions: ['', Validators.required],
      gdpr: ['', Validators.required]
    });
  }

  openFormDialog(event: Event, type: string) {
    event.preventDefault();
    let dialogRef = this.dialog.open(FormDialog, {
      maxWidth: '800px',
      minWidth: '400px',
      data: type,
    });
  }

  save() {
    console.log(this.firstFormGroup.value);
    console.log(this.secondFormGroup.value);
    console.log(this.thirdFormGroup.value);
    // new Patient(undefined,this.firstFormGroup.)
  }

}
