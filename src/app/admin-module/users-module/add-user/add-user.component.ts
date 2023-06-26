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
    Job_Number: true,
    Description: true,
    Area: true,
    Part_Number: true,
    Part_Description: true,
    Quantity: true
  }
  isValid: any = {
    Job_Number: true,
    Description: true,
    Area: true,
    Part_Number: true,
    Part_Description: true,
    Quantity: true
  }
  @Input() btn_name = ''
  inventoryForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.inventoryForm = this.fb.group({
      Job_Number: this.vs.validators.numbers,
      Description: this.vs.validators.text,
      Area: this.vs.validators.alphabets,
      Part_Number: this.vs.validators.numbers,
      Part_Description: this.vs.validators.text,
      Quantity: this.vs.validators.numbers
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