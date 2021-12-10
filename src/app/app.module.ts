import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { LoggedInAuthGuard } from './Core/user/authentication.guards';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Core/about/about.component';
import { StudenthomeListComponent } from './Core/studenthome/studenthome.list/studenthome.list.component';
import { StudenthomeDetailComponent } from './Core/studenthome/studenthome.detail/studenthome.detail.component';
import { StudenthomeEditComponent } from './Core/studenthome/studenthome.edit/studenthome.edit.component';
import { StudenthomeCreateComponent } from './Core/studenthome/studenthome.create/studenthome.create.component';
import { MealCreateComponent } from './Core/meal/meal.create/meal.create.component';
import { MealEditComponent } from './Core/meal/meal.edit/meal.edit.component';
import { MealListComponent } from './Core/meal/meal.list/meal.list.component';
import { MealDetailComponent } from './Core/meal/meal.detail/meal.detail.component';
import { AlertComponent } from './shared/alert/alert.component';
import { LoginComponent } from './Core/user/login/login.component';
import { RegisterComponent } from './Core/user/register/register.component';
import { ReviewCreateComponent } from './Core/review/review.create/review.create.component';
import { ReviewEditComponent } from './Core/review/review.edit/review.edit.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    StudenthomeListComponent,
    StudenthomeDetailComponent,
    StudenthomeEditComponent,
    StudenthomeCreateComponent,
    MealCreateComponent,
    MealEditComponent,
    MealListComponent,
    MealDetailComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    ReviewCreateComponent,
    ReviewEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggedInAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
