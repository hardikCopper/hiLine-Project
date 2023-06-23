import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  forgetPass: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.forgetPass = this.fb.group({
      companyCode: vs.validators.alphanumeric,
      email: vs.validators.email
    });
  }
  onSubmit() {
    console.log(this.forgetPass.value);
  }
}
