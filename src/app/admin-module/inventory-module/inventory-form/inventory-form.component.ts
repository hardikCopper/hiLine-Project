import { Component, Input, OnInit, Query } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent implements OnInit {
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
        if (this.inventoryForm.controls[controlName].invalid && this.inventoryForm.controls[controlName].touched) this.isValid[controlName] = false
        else this.isValid[controlName] = true
      })
    }
  }
}
