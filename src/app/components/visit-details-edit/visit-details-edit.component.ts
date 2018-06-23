import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {VisitService} from "../../services/visit.service";
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-visit-details-edit',
  templateUrl: './visit-details-edit.component.html',
  styleUrls: ['./visit-details-edit.component.css']
})
export class VisitDetailsEditComponent implements OnInit {

  visitForm: FormGroup;
  validMessage: string = "";

  constructor(private visitService: VisitService) {
  }

  ngOnInit() {
    this.visitForm = new FormGroup({
      visitDate: new FormControl('', Validators.required),
      patient: new FormControl,
    });
  }

  submitVisit() {
    if(this.visitForm.valid) {
      this.validMessage = "Visit submitted";
      this.visitService.createVisit(this.visitForm.value).subscribe(
        data => {this.visitForm.reset();
        return true;
        },
        error => {
          return throwError('error');
        }
      )
    }else{
      this.validMessage = "Please fill out the form before submitting"
    }
  }
}
