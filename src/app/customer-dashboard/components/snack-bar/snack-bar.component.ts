import {Component, OnInit} from "@angular/core";
import {DialogService} from "../../services/dialog.service";

@Component({
  template: `
    <mat-icon class="snackbar__lower-icon">check_circle</mat-icon>
    <span> Visit registered: {{timeToConfirm | date: 'EEEE, MMMM d'}}
</span>`,
  styles: [`
    .snackbar__lower-icon {
      position: relative;
      bottom: -5px;
      left: -5px;
    }
  `],
})
export class SnackBarComponent implements OnInit {

  timeToConfirm;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit() {
    this.timeToConfirm = this.dialogService.selectedTimestamp
  }
}
