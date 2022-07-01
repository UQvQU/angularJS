import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TomComponent } from './tom.component';

const routes: Routes = [
  {path: '', component: TomComponent, outlet: "tom"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TomRoutingModule { }
