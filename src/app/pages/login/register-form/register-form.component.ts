import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      contents: this.fb.array([])
    })
    this.addContent()
  }

  get contents() {
    return this.registerForm.get('contents') as FormArray
  }

  addContent(): void{
    const myContent = this.fb.group({
      title: ['title1', Validators.required],
      message: ['1']
    })
    this.contents.push(myContent)
  }

  removeContent(index: number): void{
    this.contents.removeAt(index)
  }

  register():void{
    console.log(this.contents)
  }

}
