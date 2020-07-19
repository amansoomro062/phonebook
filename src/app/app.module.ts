import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import {FormsModule} from '@angular/forms';
import { AuthService } from './components/login/auth.service';
import { AuthGaurd } from './auth-gaurd.service';
import { LoginGaurd } from './login-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PhonebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGaurd,LoginGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
