import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { VisitService} from "./services/visit.service";
import { VisitComponent } from './components/visit/visit.component';
import { VisitDetailsComponent } from './components/visit-details/visit-details.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    VisitComponent,
    VisitDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [VisitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
