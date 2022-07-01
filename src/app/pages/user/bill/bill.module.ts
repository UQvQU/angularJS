import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BillComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    BillRoutingModule
  ],
  exports: [BillComponent]
})
export class BillModule { }
