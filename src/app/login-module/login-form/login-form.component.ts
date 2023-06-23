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
    companyCode: false,
    email: false,
    password: false
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
      })
    }
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
