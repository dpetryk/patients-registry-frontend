import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {VisitDetailsComponent} from "./components/visit-details/visit-details.component";
import {VisitComponent} from "./components/visit/visit.component";


const routes: Routes = [
  {path: '', redirectTo: '/visits', pathMatch: 'full'},
  {path: 'visits', component: VisitComponent},
  {path: 'visits/:id', component: VisitDetailsComponent},
];


@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
