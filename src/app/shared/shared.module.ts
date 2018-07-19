import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from '../core/components/footer/footer.component';
import {HeaderComponent} from '../core/components/header/header.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    RouterModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
