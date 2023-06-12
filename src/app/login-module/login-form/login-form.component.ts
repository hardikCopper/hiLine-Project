import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ValidationService } from '../../Services/validation.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.loginForm = this.fb.group({
      companyCode: vs.validators.companyCode,
      email: vs.validators.email,
      password: vs.validators.password,
      rememberMe: vs.validators.rememberMe
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
