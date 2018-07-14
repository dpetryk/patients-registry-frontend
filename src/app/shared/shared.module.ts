import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {AppRoutingModule} from "../app-routing.module";

@NgModule({
  imports: [
    AppRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ]
})
export class SharedModule {
}
