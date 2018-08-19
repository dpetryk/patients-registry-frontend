import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDatepickerModule,
  MatDialogModule, MatDividerModule,
  MatIconModule, MatInputModule, MatListModule,
  MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatSidenavModule,
  MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import { NumberOfWordsPipe } from './no-of-words.pipe';


@NgModule({
  imports: [
    RouterModule,
  ],
  declarations: [
    NumberOfWordsPipe
  ],
  exports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    NumberOfWordsPipe,
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
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule,
    MatSidenavModule,
    FlexLayoutModule
  ]
})
export class SharedModule {
}
