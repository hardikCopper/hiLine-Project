import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaModuleRoutingModule } from './area-module-routing.module';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [
    AreaComponent
  ],
  imports: [
    CommonModule,
    AreaModuleRoutingModule
  ]
})
export class AreaModuleModule { }
