import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
import { ValidationService } from '../../Services/validation.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService, private authService: AuthServiceService) {
    this.loginForm = this.fb.group({
      company_code: vs.validators.companyCode,
      email: vs.validators.email,
      password: ['', Validators.required],
      rememberMe: vs.validators.rememberMe
    });
  }
  ngOnInit() {

  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log('res: ', res);
      if (res.response_code === 200) {
        console.log("Successfull")
        this.authService.setToken(res.data.access_token, this.loginForm.value.rememberMe);
      }
    })
  }
}
