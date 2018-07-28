import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
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

  personalFg: FormGroup;
  contactsFg: FormGroup;
  loginFg: FormGroup;
  passwordsFg: FormGroup;
  consentsFg: FormGroup;

  patient: Patient;
  address: Address;


  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private patientService: PatientService) {
  }

  get firstName() {
    return this.personalFg.get('firstName');
  }

  get surname() {
    return this.personalFg.get('surname');
  }

  get dateOfBirth() {
    return this.personalFg.get('dateOfBirth');
  }

  get pesel() {
    return this.personalFg.get('pesel');
  }

  get city() {
    return this.contactsFg.get('city');
  }

  get street() {
    return this.contactsFg.get('street');
  }

  get postal() {
    return this.contactsFg.get('postal');
  }

  get house() {
    return this.contactsFg.get('house');
  }

  get apartment() {
    return this.contactsFg.get('apartment');
  }

  get email() {
    return this.contactsFg.get('email');
  }

  get phone() {
    return this.contactsFg.get('phone');
  }

  get login() {
    return this.loginFg.get('login');
  }

  get password() {
    return this.loginFg.get('passwords.password');
  }

  get passwordConfirm() {
    return this.loginFg.get('passwords.passwordConfirm');
  }


  ngOnInit() {
    this.personalFg = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      pesel: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]]
    });

    this.contactsFg = this.formBuilder.group({
      city: ['', [Validators.required, Validators.minLength(2)]],
      street: ['', [Validators.required, Validators.minLength(2)]],
      postal: ['', [Validators.required, Validators.minLength(5)]],
      house: ['', Validators.required],
      apartment: [''],
      email: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")]],
      phone: ['', [Validators.required, Validators.minLength(7)]]
    });

    this.loginFg = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(2)]],
      passwords: this.formBuilder.group({
        password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
        passwordConfirm: ['', [Validators.required,]],
      }, {validator: this.passwordConfirmation})
    });

    this.consentsFg = this.formBuilder.group({
      termsAndConditions: ['', Validators.required],
      gdpr: ['', Validators.required],
    })

  }

  // this.passwordsFg = this.formBuilder.group({
  //   password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$')]],
  //   passwordConfirm: ['', [Validators.required]],
  //    }, {validator: this.passwordConfirmation});
  //
  // });

  passwordConfirmation(c: AbstractControl) {
    if (c.get('password').pristine || c.get('passwordConfirm').pristine) {
      return null;
    }
    if (c.get('password').value === c.get('passwordConfirm').value) {
      console.log("MATCH!");
      c.get('passwordConfirm').setErrors(null)
      return null;
    }
    return c.get('passwordConfirm').setErrors({mismatch: true});

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
    console.log(this.personalFg.value);
    console.log(this.contactsFg.value);
    console.log(this.consentsFg.value);
    // new Patient(undefined,this.personalFg.)
  }

}
