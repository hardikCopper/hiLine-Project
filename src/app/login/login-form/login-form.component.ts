import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      companyCode: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]],
      rememberMe: [false]
    });
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
