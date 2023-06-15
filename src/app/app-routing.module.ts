import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Common/Guards/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./login-module/login.module').then(m => m.LoginModule)
}, {
  path: 'admin', canActivate: [authGuard],
  loadChildren: () => import('./admin-module/admin.module').then(m => m.AdminModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
