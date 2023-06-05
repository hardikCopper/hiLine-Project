import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { CommonLoginComponent } from './common-login/common-login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LogoComponent } from './logo/logo.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CommonLoginComponent,
    LoginFormComponent,
    LogoComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
