import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialog implements OnInit {


  constructor(
    private dialogRef: MatDialogRef<FormDialog>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {
  }

  ngOnInit() {
  }

  dismiss() {
    this.dialogRef.close(null);
  }


}
