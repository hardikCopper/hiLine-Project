import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
      companyCode: vs.validators.companyCode,
      email: vs.validators.email
    });
  }
}
