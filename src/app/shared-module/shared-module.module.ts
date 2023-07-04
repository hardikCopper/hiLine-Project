import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenPasswordPipe } from './pipes/hidden-password.pipe';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { UserModalComponent } from './user-modal/user-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HiddenPasswordPipe,
    TableFooterComponent,
    UserModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HiddenPasswordPipe,
    TableFooterComponent,
    UserModalComponent
  ]
})
export class SharedModuleModule { }
