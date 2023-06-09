import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLoginComponent } from './common-login/common-login.component';
import { LoginFormComponent} from './login-form/login-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [{
  path: '', component: CommonLoginComponent,
  children: [
    { path: '', component: LoginFormComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'verify-email', component: VerifyEmailComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
