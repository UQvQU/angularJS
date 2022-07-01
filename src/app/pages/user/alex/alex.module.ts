import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { AlexRoutingModule } from './alex-routing.module';
import { AlexComponent } from './alex.component';


@NgModule({
  declarations: [
    AlexComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlexRoutingModule
  ],
  exports: [AlexComponent]
})
export class AlexModule { }
