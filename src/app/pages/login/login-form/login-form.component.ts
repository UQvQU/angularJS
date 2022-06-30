import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

  loginForms!: FormGroup
  constructor(private fb: FormBuilder, private router: Router) {

  }

  str: string = ''


  ngOnInit(): void {
    this.loginForms = this.fb.group({
      fullName: this.fb.group({
        firstName: ['T', [Validators.required]],
        lastName: []
      }),
      phone: ['18164628888', [Validators.required]],
      password: ['123456', [Validators.required]],
      remember: [true]
    })
  }

  login():void {
    console.log('goHome', this.loginForms.value)
    this.router.navigate(["/home"], {
      queryParams: {
        name: this.loginForms.value.phone
      }
    })
  }

}
