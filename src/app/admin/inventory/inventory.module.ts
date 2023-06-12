import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { LogComponent } from './log/log.component';
import { CommonComponent } from './common/common.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    LogComponent,
    CommonComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ]
})
export class InventoryModule { }
