import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';
import { ValidatorFn, ValidationErrors } from '@angular/forms';
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

  @HostListener('mouseout') onMouseOut() {
    if (this.resetPass.value.password === this.resetPass.value.confirmPassword) {
      this.passwordsSame = true;
    }
    else {
      this.passwordsSame = false;
    }
  }
}
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value
    ? { 'confirmPassword': true }
    : null;
};
