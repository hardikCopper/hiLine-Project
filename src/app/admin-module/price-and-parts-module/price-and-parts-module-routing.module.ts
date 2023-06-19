import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceAndPartsComponent } from './price-and-parts/price-and-parts.component';

const routes: Routes = [{ path: '', component: PriceAndPartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceAndPartsModuleRoutingModule { }
