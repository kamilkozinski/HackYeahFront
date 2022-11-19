import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { switchMap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  signUp() {
    const registerFormValue = this.registerForm.getRawValue();
    const newUser: User = {
      username: registerFormValue.username,
      email: registerFormValue.email,
      role: [],
      password: registerFormValue.password,
    };
    console.log(newUser);
    this.authService
      .register(newUser)
      .pipe(switchMap((x) => this.authService.login(newUser)))
      .subscribe((y) => {
        console.log(y);
      });
  }
}
