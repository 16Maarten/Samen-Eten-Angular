import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  subs: Subscription | undefined;

  user: User = {
    _id: undefined,
    firstName: "",
    lastName: "",
    studentNumber:0,
    birthday: new Date(),
    email: "",
    password: "",
    token: ""
  }
  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onSubmit(): void {
      this.authenticationService.register(this.user).subscribe((user) => {
        if (user) {
          console.log('user = ', user);
          this.router.navigate(['/studenthome']);
        }
      });
  }

}

