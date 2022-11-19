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
import { Gminy } from '../types/Gminy';
import { User } from '../types/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  gminy = Gminy.sort((a, b) => a.localeCompare(b));
  
  registerForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    gmnia: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  signUp() {
    const registerFormValue = this.registerForm.getRawValue();
    console.log(registerFormValue);

    const newUser: User = {
      username: registerFormValue.username,
      email: registerFormValue.email,
      gmnia: registerFormValue.gmnia,
      address: registerFormValue.address,
      role: [],
      password: registerFormValue.password,
    };
    this.authService
      .register(newUser)
      .pipe(switchMap((x) => this.authService.login(newUser)))
      .subscribe((y) => {
        console.log(y);
      });
  }
}
