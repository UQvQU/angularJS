import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BillComponent } from './bill/bill.component';
// import { TomComponent } from './tom/tom.component';

// 似乎没用上
const routes: Routes = [
  // {
  //   path: 'bill',
  //   loadChildren: () =>
  //     import('./bill/bill.module').then((m) => m.BillModule),
  // },
  // {
  //   path: 'tom',
  //   loadChildren: () =>
  //     import('./tom/tom.module').then((m) => m.TomModule),
  // },
  // {
  //   path: '', redirectTo: '/user/bill', pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
