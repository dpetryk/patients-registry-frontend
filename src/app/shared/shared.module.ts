import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatIconModule, MatInputModule,
  MatMenuModule, MatNativeDateModule,
  MatSnackBarModule, MatStepperModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";


@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatStepperModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
