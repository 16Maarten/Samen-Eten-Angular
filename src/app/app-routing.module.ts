import { NgModule } from '@angular/core';
import { LoggedInAuthGuard } from './Core/user/authentication.guards';
import { RouterModule, Routes } from '@angular/router';
import { StudenthomeListComponent } from './Core/studenthome/studenthome.list/studenthome.list.component';
import { StudenthomeDetailComponent } from './Core/studenthome/studenthome.detail/studenthome.detail.component';
import { StudenthomeCreateComponent } from './Core/studenthome/studenthome.create/studenthome.create.component';
import { StudenthomeEditComponent } from './Core/studenthome/studenthome.edit/studenthome.edit.component';
import { AboutComponent } from './Core/about/about.component';
import { MealListComponent } from './Core/meal/meal.list/meal.list.component';
import { MealDetailComponent } from './Core/meal/meal.detail/meal.detail.component';
import { MealCreateComponent } from './Core/meal/meal.create/meal.create.component';
import { MealEditComponent } from './Core/meal/meal.edit/meal.edit.component';
import { LoginComponent } from './Core/user/login/login.component';
import { RegisterComponent } from './Core/user/register/register.component';
import { ReviewCreateComponent } from './Core/review/review.create/review.create.component';
import { ReviewEditComponent } from './Core/review/review.edit/review.edit.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'login'},
  {path: 'login',pathMatch: 'full', component: LoginComponent,},
  {path: 'register',pathMatch: 'full', component: RegisterComponent},
  {path: 'about',pathMatch: 'full', component: AboutComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'studenthome',pathMatch: 'full', component: StudenthomeListComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'studenthome/new',pathMatch: 'full', component: StudenthomeCreateComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'studenthome/:id',pathMatch: 'full', component: StudenthomeDetailComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'studenthome/:id/edit',pathMatch: 'full', component: StudenthomeEditComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'meals',pathMatch: 'full', component: MealListComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'meals/new',pathMatch: 'full', component: MealCreateComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'meals/:id',pathMatch: 'full', component: MealDetailComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'meals/:id/edit',pathMatch: 'full', component: MealEditComponent, canActivate: [LoggedInAuthGuard] },
  {path: 'meals/:id/review/new',pathMatch: 'full', component: ReviewCreateComponent, canActivate: [LoggedInAuthGuard]},
  {path: 'meals/:id/review/:reviewId/edit',pathMatch: 'full', component: ReviewEditComponent, canActivate: [LoggedInAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
