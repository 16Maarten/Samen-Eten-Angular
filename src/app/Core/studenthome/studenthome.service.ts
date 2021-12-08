import { Injectable } from '@angular/core';
import { Studenthome } from './studenthome.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EntityService } from 'src/app/shared/generics/entity.service';

@Injectable({
  providedIn: 'root',
})
export class StudenthomeService extends EntityService<Studenthome> {
  constructor(http: HttpClient) {
    console.log(environment.apiUrl+'studenthomes')
    super(http, environment.apiUrl, 'studenthomes');
  }
}

