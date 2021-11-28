import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Core/about/about.component';
import { StudenthomeComponent } from './Core/studenthome/studenthome.component';
import { UserEditComponent } from './Core/user/user.edit/user.edit.component';
import { UserListComponent } from './Core/user/user.list/user.list.component';
import { UserCreateComponent } from './Core/user/user.create/user.create.component';
import { UserDetailComponent } from './Core/user/user.detail/user.detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    StudenthomeComponent,
    UserEditComponent,
    UserListComponent,
    UserCreateComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
