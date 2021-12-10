import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EntityService } from 'src/app/shared/generics/entity.service';
import { AuthenticationService } from '../user/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends EntityService<User> {
  constructor(http: HttpClient,authenticationService: AuthenticationService) {
    super(http, environment.apiUrl, 'users', authenticationService);
  }
}
