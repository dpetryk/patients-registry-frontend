import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";

import {FormDialog} from "../form-dialog/form-dialog.component";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openFormDialog(event: Event, type: string) {
    event.preventDefault();
    let dialogRef = this.dialog.open(FormDialog, {
      maxWidth: '800px',
      minWidth: '400px',
      data: type,
    });
  }

}
