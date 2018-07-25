import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormDialog } from './components/form-dialog/form-dialog.component';
import { RegistrationFormStepsComponent } from './components/registration-form-steps/registration-form-steps.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    RegistrationFormComponent,
    FormDialog,
    RegistrationFormStepsComponent
  ],
  entryComponents: [
    FormDialog
  ]
})
export class LoginModule { }
