import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ValidationService } from 'src/app/Common/Services/validation.service';
import { jobDataType } from 'src/app/Common/Types';

@Component({
  selector: 'app-inventory-form',
  templateUrl: './inventory-form.component.html',
  styleUrls: ['./inventory-form.component.scss']
})
export class InventoryFormComponent {
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
  controlNames: string[] = []
  @Input() btn_name = ''
  inventoryForm: FormGroup
  @Output() formSubmitted = new EventEmitter<jobDataType>();
  sendData: jobDataType = { id: undefined, description: undefined, checkboxState: undefined, invoiced: undefined, date: undefined, quantity: undefined }
  constructor(private fb: FormBuilder, private vs: ValidationService) {
    this.inventoryForm = this.fb.group({
      Job_Number: this.vs.validators.numbers,
      Description: this.vs.validators.text,
      Area: this.vs.validators.alphabets,
      Part_Number: this.vs.validators.numbersNR,
      Part_Description: this.vs.validators.textNR,
      Quantity: this.vs.validators.numbersNR
    });
    for (let controlName in this.inventoryForm.controls) {
      this.controlNames.push(controlName)
    }
  }
  submitForm(e: Event) {
    e.preventDefault();
    console.log("Clicked")
    let date = new Date();
    this.sendData.quantity = this.inventoryForm.value.Quantity;
    this.sendData.id = this.inventoryForm.value.Job_Number;
    this.sendData.description = this.inventoryForm.value.Description;
    this.sendData.checkboxState = false
    this.sendData.invoiced = 'Open'
    this.sendData.date = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    console.log('this.sendData: ', this.sendData);
    this.formSubmitted.emit(this.sendData);
  }

  validation(index: number) {
    if (this.inventoryForm.controls[this.controlNames[index]].value === '') this.isEmpty[this.controlNames[index]] = true;
    else this.isEmpty[this.controlNames[index]] = false
    if (this.inventoryForm.controls[this.controlNames[index]].invalid) this.isValid[this.controlNames[index]] = false
    else this.isValid[this.controlNames[index]] = true
  }
}
