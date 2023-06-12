import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { LogComponent } from './log-module/log/log.component';
import { TabsComponent } from './tabs/tabs.component';
import { InventoryComponent } from './inventory/inventory.component';


@NgModule({
  declarations: [
    LogComponent,
    TabsComponent,
    InventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
