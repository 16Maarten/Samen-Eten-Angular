import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './Core/about/about.component';
import { StudenthomeComponent } from './Core/studenthome/studenthome.component';
import { EditComponent } from './Core/users/edit/edit.component';
import { ListComponent } from './Core/users/list/list.component';
import { CreateComponent } from './Core/users/create/create.component';
import { DetailComponent } from './Core/users/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AboutComponent,
    StudenthomeComponent,
    EditComponent,
    ListComponent,
    CreateComponent,
    DetailComponent
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
