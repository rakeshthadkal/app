import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent implements OnInit {
  public LoginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.[0-9])(?=.[a-z])(?=.*[A-Z])(?=\\S+$).{12,}$'),
    ]),
  });

  constructor(private _loginservice: LoginService, private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.LoginForm.value);
    this._loginservice.Login(this.LoginForm.value).subscribe(
      (data: any) => {
        alert('login Sucess');
        this.router.navigateByUrl('student-dashboard');
        sessionStorage.setItem('my-app-token', data.token);
      },
      (err: any) => {
        alert('invalid Credentials');
      }
    );
  }
}
