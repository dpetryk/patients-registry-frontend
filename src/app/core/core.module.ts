import { NgModule } from '@angular/core';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '../shared/shared.module';
import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    // NgbModule.forRoot(),
    SharedModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent]
})
export class CoreModule { }
