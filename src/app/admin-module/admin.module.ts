import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminModalComponent } from './admin-modal/admin-modal.component';
import { InventoryModule } from './inventory-module/inventory.module';
import { NavbarRightMenuComponent } from './navbar-right-menu/navbar-right-menu.component';


@NgModule({
  declarations: [
    AdminLayoutComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    AdminModalComponent,
    NavbarRightMenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    InventoryModule
  ]
})
export class AdminModule { }
