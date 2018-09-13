import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard.module';
import {DoctorDashboardModule} from './doctor-dashboard/doctor-dashboard.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerDashboardModule,
    DoctorDashboardModule,
    CoreModule,
    LoginModule,
    SharedModule
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {
}
