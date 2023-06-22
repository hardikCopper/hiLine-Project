import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersModuleRoutingModule } from './users-module-routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModuleModule { }
