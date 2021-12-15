import { Injectable } from '@angular/core';
import { Studenthome } from './studenthome.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityService } from 'src/app/shared/generics/entity.service';
import { AuthenticationService } from '../user/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class StudenthomeService extends EntityService<Studenthome> {
  route: string
  constructor(http: HttpClient, authenticationService: AuthenticationService) {
    super(http, environment.apiUrl, 'studenthomes', authenticationService);
  }

}

