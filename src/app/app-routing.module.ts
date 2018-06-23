import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {VisitDetailsComponent} from "./components/visit-details/visit-details.component";
import {VisitComponent} from "./components/visit/visit.component";
import {VisitDetailsEditComponent} from "./components/visit-details-edit/visit-details-edit.component";


const routes: Routes = [
  {path: '', redirectTo: '/visits', pathMatch: 'full'},
  {path: 'visits', component: VisitComponent},
  {path: 'visits/create', component: VisitDetailsEditComponent},
  {path: 'visits/:id', component: VisitDetailsComponent}

];


@NgModule({imports: [RouterModule.forRoot(routes)], exports: [RouterModule]})
export class AppRoutingModule {
}
