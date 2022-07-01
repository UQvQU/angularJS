import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { TomRoutingModule } from './tom-routing.module';
import { TomComponent } from './tom.component';


@NgModule({
  declarations: [
    TomComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    TomRoutingModule
  ],
  exports: [TomComponent]
})
export class TomModule { }
