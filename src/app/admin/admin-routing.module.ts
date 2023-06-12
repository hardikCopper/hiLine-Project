import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
const routes: Routes = [{
  path: '', component: AdminLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./inventory/inventory.module').then(m => m.InventoryModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
