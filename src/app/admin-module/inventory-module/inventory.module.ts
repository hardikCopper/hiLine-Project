import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { LogComponent } from './log/log.component';
import { TabsComponent } from './tabs/tabs.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TableComponent } from './table/table.component';
import { InventoryFormComponent } from './inventory-form/inventory-form.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { ReturnInventoryComponent } from './return-inventory/return-inventory.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    LogComponent,
    TabsComponent,
    InventoryComponent,
    TableComponent,
    InventoryFormComponent,
    AddInventoryComponent,
    ReturnInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule
  ]
})
export class InventoryModule { }
