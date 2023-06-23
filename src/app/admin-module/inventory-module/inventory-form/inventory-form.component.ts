import { Component, Input } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent {
  @Input() btn_name = ''
  inventoryForm: FormGroup
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.inventoryForm = this.fb.group({
      Job_Number: this.vs.validators.numbers,
      Description: this.vs.validators.text,
      Area: this.vs.validators.text,
      Part_Number: this.vs.validators.alphanumeric,
      Part_Description: this.vs.validators.text,
      Quantity: this.vs.validators.numbers
    });
  }
}
