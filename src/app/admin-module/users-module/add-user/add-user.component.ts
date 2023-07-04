import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
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
  @Input() btn_name = ''
  inventoryForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.inventoryForm = this.fb.group({
      Employee_Id: this.vs.validators.numbers,
      Employee_Name: this.vs.validators.text,
      Select_Role: this.vs.validators.alphabets,
      Password: this.vs.validators.password,
      Email: this.vs.validators.email
    });
  }
  ngOnInit() {
    for (let controlName in this.inventoryForm.controls) {
      this.inventoryForm.get(controlName)?.valueChanges.subscribe((value: any) => {
        if (value === '') this.isEmpty[controlName] = true;
        else this.isEmpty[controlName] = false
        if (this.inventoryForm.controls[controlName].invalid) this.isValid[controlName] = false
        else this.isValid[controlName] = true
      })
    }
  }
}
