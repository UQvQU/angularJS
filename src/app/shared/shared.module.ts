import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

const MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  ...SHARED_ZORRO_MODULES
]

@NgModule({
  declarations: [],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ]
})
export class SharedModule { }
