import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryComponent } from './inventory/inventory.component';
import { EditJobComponent } from './edit-job/edit-job.component';

const routes: Routes = [{
  path: '', component: InventoryComponent
},
{ path: ':id/edit', component: EditJobComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
