import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  subs: Subscription | undefined;
  submitted = false;

  user: User = {
    _id: "",
    firstName: "",
    lastName: "",
    studentNumber:0,
    birthday: new Date(),
    email: "",
    password: "",
    token: ""
  }


  constructor(private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.subs = this.authenticationService
      .getUserFromLocalStorage()
      .subscribe((user: any) => {
        if (user.length == 0) {
          console.log('user:', user);
          console.log('User already logged in > to dashboard');
          this.router.navigate(['/studenthome']);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onSubmit(): void {
      this.submitted = true;
      const email = this.user.email
      const password = this.user.password;
      this.authenticationService
        .login(email, password)
        // .pipe(delay(1000))
        .subscribe((user) => {
          if (user) {
            console.log('Logged in');
            this.router.navigate(['/studenthome']);
          }
          this.submitted = false;
        });
  }
}

