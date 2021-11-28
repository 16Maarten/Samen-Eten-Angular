import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenthomeComponent } from './Core/studenthome/studenthome.component';
import { AboutComponent } from './Core/about/about.component';
import { UserListComponent } from './Core/user/user.list/user.list.component';
import { UserCreateComponent } from './Core/user/user.create/user.create.component';
import { UserEditComponent } from './Core/user/user.edit/user.edit.component';
import { UserDetailComponent } from './Core/user/user.detail/user.detail.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'users'},
  {path: 'users', component: UserListComponent },
  {path: 'about',pathMatch: 'full', component: AboutComponent },
  {path: 'studenthome',pathMatch: 'full', component: StudenthomeComponent },
  {path: 'users/new',pathMatch: 'full', component: UserCreateComponent },
  {path: 'users/:id',pathMatch: 'full', component: UserDetailComponent },
  {path: 'users/:id/edit', pathMatch: 'full', component: UserEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
