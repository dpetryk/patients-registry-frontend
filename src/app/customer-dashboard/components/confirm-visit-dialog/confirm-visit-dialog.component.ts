import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";

import moment from "moment-es6";
import { VisitService } from "../../../core/services/visit.service";
import { DialogService } from "../../services/dialog.service";
import { Visit } from "../../../core/models/visit.model";
import { Patient } from "../../../core/models/patient.model";

@Component({
  selector: 'app-confirm-visit-dialog',
  templateUrl: './confirm-visit-dialog.component.html',
  styleUrls: ['./confirm-visit-dialog.component.scss']
})
export class ConfirmVisitDialogComponent implements OnInit {

  selectedTimestamp: moment.Moment;
  confirmation: boolean;

  constructor(private dialogService: DialogService,
    private visitService: VisitService,
    private dialogRef: MatDialogRef<ConfirmVisitDialogComponent>) {
  }

  ngOnInit() {
    this.selectedTimestamp = this.dialogService.selectedTimestamp;
    this.confirmation = this.dialogService.confirmation;
  }

  confirmVisit(visitDate: moment.Moment): void {
    const visit = new Visit(undefined, visitDate.toDate(), '', '', '', false, new Patient(
      null, 'Added', 'Newly', '22222222222', 'test@test.pl', '751233211', true, null
    ));
    this.visitService.createVisit(visit).subscribe(
      data => {
        console.log(data);
      },
      error => console.error(error));
    this.dialogRef.close(visit)
  }
  dismiss() {
    this.dialogRef.close(null);
  }

}
