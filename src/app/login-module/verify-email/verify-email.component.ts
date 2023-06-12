import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Services/validation.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent {
  verifyEmail: FormGroup
  time = 60
  timerEnd = false
  constructor(private fb: FormBuilder, vs: ValidationService) {
    this.verifyEmail = this.fb.group({
      verifyCode: vs.validators.verifyCode
    });
    let timeInterval = setInterval(() => {
      if (this.time > 0) this.time--;
      else {
        clearInterval(timeInterval);
        this.timerEnd = true
      }
    }, 1000);
  }

  onSubmit() {
    console.log(this.verifyEmail.value);
  }
}
