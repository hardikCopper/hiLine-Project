import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PriceAndPartsModuleRoutingModule } from './price-and-parts-module-routing.module';
import { PriceAndPartsComponent } from './price-and-parts/price-and-parts.component';


@NgModule({
  declarations: [
    PriceAndPartsComponent
  ],
  imports: [
    CommonModule,
    PriceAndPartsModuleRoutingModule
  ]
})
export class PriceAndPartsModuleModule { }
