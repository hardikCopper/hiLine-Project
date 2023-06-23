import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { isEmptyType } from 'src/app/Common/Types';
import { ValidationService } from 'src/app/Common/Services/validation.service';
import { AuthServiceService } from 'src/app/Common/Services/auth-service.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  isEmpty: isEmptyType = {
    company_code: false,
    email: false,
    password: false
  }
  isValid: isEmptyType = {
    company_code: true,
    email: true,
    password: true
  }
  constructor(private fb: FormBuilder, private vs: ValidationService, private authService: AuthServiceService) {
    this.loginForm = this.fb.group({
      companyCode: vs.validators.alphanumeric,
      email: vs.validators.email,
      password: ['', Validators.required],
      rememberMe: vs.validators.state
    });
  }
  ngOnInit() {
    for (let controlName in this.loginForm.controls) {
      this.loginForm.get(controlName)?.valueChanges.subscribe((value: any) => {
        if (value === '') this.isEmpty[controlName] = true;
        else this.isEmpty[controlName] = false
        if (this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched) this.isValid[controlName] = false
        else this.isValid[controlName] = true
      })
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('this.loginForm.value: ', this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe(res => {
      console.log('res: ', res);
      if (res.response_code === 200) {
        console.log("Successfull")
        this.authService.setToken(res.data.access_token, this.loginForm.value.rememberMe);
      }
    })
  }
}
