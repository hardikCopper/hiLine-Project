import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonLoginComponent } from './common-login/common-login.component';
import { LoginFormComponent} from './login-form/login-form.component';

const routes: Routes = [{
  path: '', component: CommonLoginComponent,
  children: [
    { path: '', component: LoginFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
