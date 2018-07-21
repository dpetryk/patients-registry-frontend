import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
// import {ModalComponent} from './customer-dashboard/components/modal/modal.component';
import {CustomerDashboardModule} from './customer-dashboard/customer-dashboard.module';
import {DoctorDashboardModule} from './doctor-dashboard/doctor-dashboard.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CustomerDashboardModule,
    DoctorDashboardModule,
    CoreModule,
    SharedModule
  ],
  bootstrap: [AppComponent],
  // entryComponents: [ModalComponent]
})
export class AppModule {
}
