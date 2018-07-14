import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    NgbModule.forRoot(),
    SharedModule
  ],
  declarations: []
})
export class CoreModule { }
