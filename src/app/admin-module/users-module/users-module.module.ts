import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  exports:[AddUserComponent]
})
export class UsersModuleModule { }
