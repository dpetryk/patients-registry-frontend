import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {MatButtonModule, MatDialogModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";

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
    FlexLayoutModule
  ]
})
export class SharedModule {
}
