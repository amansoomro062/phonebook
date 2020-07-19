import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PhonebookComponent } from './components/phonebook/phonebook.component';
import {AuthGaurd} from 'src/app/auth-gaurd.service'
import { LoginGaurd } from './login-gaurd.service';


const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login',canActivate:[LoginGaurd], component: LoginComponent, },
  {path:'phone', canActivate: [AuthGaurd], component: PhonebookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
