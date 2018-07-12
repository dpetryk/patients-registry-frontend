import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {VisitService} from '../../services/visit.service';
import {throwError} from 'rxjs';
import {PatientService} from '../../services/patient.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-visit-details-edit',
  templateUrl: './visit-details-edit.component.html',
  styleUrls: ['./visit-details-edit.component.css']
})
export class VisitDetailsEditComponent implements OnInit {

  visitForm: FormGroup;
  validMessage = '';
  patients;

  constructor(private visitService: VisitService, private patientService: PatientService, private router: Router) {
  }

  ngOnInit() {
    this.getPatients();
    this.visitForm = new FormGroup({
      visitDate: new FormControl('', Validators.required),
      patient: new FormControl,
    });
  }

  getPatients() {
      this.patientService.getPatients().subscribe(
        data => {
          this.patients = data;
        },
        err => {
          console.error(err);
        },
        () => console.log('patients loaded')
      );
    }

  submitVisit() {
    if (this.visitForm.valid) {
      this.validMessage = 'Visit submitted';
      this.visitService.createVisit(this.visitForm.value).subscribe(
        data => {
          this.visitForm.reset();
          return true;
        },
        error => {
          return throwError('error');
        }
      );
    } else {
      this.validMessage = 'Please fill out the form before submitting';
    }
    //this.router.navigate(['visits']);
  }
}
