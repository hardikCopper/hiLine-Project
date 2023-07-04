import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {
  isEmpty: any = {
    Employee_Id: true,
    Employee_Name: true,
    Select_Role: true,
    Password: true,
    Email: true
  }
  isValid: any = {
    Employee_Id: true,
    Employee_Name: true,
    Select_Role: true,
    Password: true,
    Email: true
  }
  @Input() heading = ''
  @Input() btn_name = ''
  controlNames: string[] = []
  inventoryForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.inventoryForm = this.fb.group({
      Employee_Id: this.vs.validators.numbers,
      Employee_Name: this.vs.validators.text,
      Select_Role: this.vs.validators.alphabets,
      Password: this.vs.validators.password,
      Email: this.vs.validators.email
    });
    for (let controlName in this.inventoryForm.controls) {
      this.controlNames.push(controlName)
    }

  }
  validation(index: number) {
    if (this.inventoryForm.controls[this.controlNames[index]].value === '') this.isEmpty[this.controlNames[index]] = true;
    else this.isEmpty[this.controlNames[index]] = false
    if (this.inventoryForm.controls[this.controlNames[index]].invalid) this.isValid[this.controlNames[index]] = false
    else this.isValid[this.controlNames[index]] = true
  }
}
