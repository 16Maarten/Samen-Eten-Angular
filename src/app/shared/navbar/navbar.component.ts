import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Core/user/user.model';
import { AuthenticationService } from '../../Core/user/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  loggedInUser$: Observable<User> | undefined;
  isNavbarCollapsed = true

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.loggedInUser$ = this.authenticationService.currentUser$
  }

  logout(): void {
    this.authenticationService.logout();
  }
}

