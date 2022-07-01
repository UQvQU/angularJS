import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
// import { UserModule } from '../user/user.module'
import { TomModule } from '../user/tom/tom.module';
import { AlexModule } from '../user/alex/alex.module';
import { BillModule } from '../user/bill/bill.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    HomeComponent,
    TestComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HomeRoutingModule,
    // UserModule,
    TomModule,
    AlexModule,
    BillModule
  ]
})
export class HomeModule { }
