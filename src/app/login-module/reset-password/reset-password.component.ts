import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';
import { confirmPasswordValidator } from 'src/Common/Functions';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPass: FormGroup
  passwordsSame = true
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.resetPass = this.fb.group({
      password: vs.validators.password,
      confirmPassword: vs.validators.password
    }, {
      validators: confirmPasswordValidator
    });
  }

  onSubmit() {
    console.log(this.resetPass.value);
  }

  @HostListener('blur') onOut() {
    if (this.resetPass.value.password === this.resetPass.value.confirmPassword) {
      this.passwordsSame = true;
    }
    else {
      this.passwordsSame = false;
    }
  }
}

