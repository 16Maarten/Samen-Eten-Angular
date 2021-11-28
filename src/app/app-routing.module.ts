import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenthomeListComponent } from './Core/studenthome/studenthome.list/studenthome.list.component';
import { StudenthomeDetailComponent } from './Core/studenthome/studenthome.detail/studenthome.detail.component';
import { StudenthomeCreateComponent } from './Core/studenthome/studenthome.create/studenthome.create.component';
import { StudenthomeEditComponent } from './Core/studenthome/studenthome.edit/studenthome.edit.component';
import { AboutComponent } from './Core/about/about.component';
import { UserListComponent } from './Core/user/user.list/user.list.component';
import { UserCreateComponent } from './Core/user/user.create/user.create.component';
import { UserEditComponent } from './Core/user/user.edit/user.edit.component';
import { UserDetailComponent } from './Core/user/user.detail/user.detail.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'users'},
  {path: 'users', component: UserListComponent },
  {path: 'about',pathMatch: 'full', component: AboutComponent },
  {path: 'users/new',pathMatch: 'full', component: UserCreateComponent },
  {path: 'users/:id',pathMatch: 'full', component: UserDetailComponent },
  {path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },
  {path: 'studenthome',pathMatch: 'full', component: StudenthomeListComponent },
  {path: 'studenthome/new',pathMatch: 'full', component: StudenthomeCreateComponent },
  {path: 'studenthome/:id',pathMatch: 'full', component: StudenthomeDetailComponent },
  {path: 'studenthome/:id/edit',pathMatch: 'full', component: StudenthomeEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
