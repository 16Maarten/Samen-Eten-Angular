import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Core/about/about.component';
import { UserEditComponent } from './Core/user/user.edit/user.edit.component';
import { UserListComponent } from './Core/user/user.list/user.list.component';
import { UserCreateComponent } from './Core/user/user.create/user.create.component';
import { UserDetailComponent } from './Core/user/user.detail/user.detail.component';
import { StudenthomeListComponent } from './Core/studenthome/studenthome.list/studenthome.list.component';
import { StudenthomeDetailComponent } from './Core/studenthome/studenthome.detail/studenthome.detail.component';
import { StudenthomeEditComponent } from './Core/studenthome/studenthome.edit/studenthome.edit.component';
import { StudenthomeCreateComponent } from './Core/studenthome/studenthome.create/studenthome.create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    UserEditComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent,
    StudenthomeListComponent,
    StudenthomeDetailComponent,
    StudenthomeEditComponent,
    StudenthomeCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
