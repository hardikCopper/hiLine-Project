import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';

const routes: Routes = [{
  path: '', component: AdminLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./inventory-module/inventory.module').then(m => m.InventoryModule)
    },
    {
      path: 'users',
      loadChildren: () => import('./users-module/users-module.module').then(m => m.UsersModuleModule)
    },
    {
      path: 'price_and_parts',
      loadChildren: () => import('./price-and-parts-module/price-and-parts-module.module').then(m => m.PriceAndPartsModuleModule)
    },
    {
      path:'area',
      loadChildren: () => import('./area-module/area-module.module').then(m => m.AreaModuleModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
