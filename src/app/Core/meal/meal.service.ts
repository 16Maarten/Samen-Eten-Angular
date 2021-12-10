import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Meal } from './meal.model';
import { EntityService } from 'src/app/shared/generics/entity.service';
import { AuthenticationService } from '../user/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class MealService extends EntityService<Meal> {
  constructor(http: HttpClient, authenticationService: AuthenticationService) {
    super(http, environment.apiUrl, 'meals', authenticationService);
  }
}
