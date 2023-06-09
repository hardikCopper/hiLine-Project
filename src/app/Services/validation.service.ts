import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  validators = {
    companyCode: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')]],
    rememberMe: [false],
    verifyCode: ['', [Validators.required, Validators.pattern('[0-9]+')]]
  }

  constructor() { }
}
