import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudenthomeComponent } from './Core/studenthome/studenthome.component';
import { AboutComponent } from './Core/about/about.component';
import { ListComponent } from './Core/users/list/list.component';
import { CreateComponent } from './Core/users/create/create.component';
import { EditComponent } from './Core/users/edit/edit.component';
import { DetailComponent } from './Core/users/detail/detail.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'users'},
  {path: 'users', component: ListComponent },
  {path: 'about',pathMatch: 'full', component: AboutComponent },
  {path: 'studenthome',pathMatch: 'full', component: StudenthomeComponent },
  {path: 'users/new',pathMatch: 'full', component: CreateComponent },
  {path: 'users/:id',pathMatch: 'full', component: DetailComponent },
  {path: 'users/:id/edit', pathMatch: 'full', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
