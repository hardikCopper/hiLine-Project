import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiddenPasswordPipe } from './pipes/hidden-password.pipe';
import { TableFooterComponent } from './table-footer/table-footer.component';


@NgModule({
  declarations: [
    HiddenPasswordPipe,
    TableFooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HiddenPasswordPipe,
    TableFooterComponent
  ]
})
export class SharedModuleModule { }
