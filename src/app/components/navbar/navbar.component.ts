import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit ,OnDestroy {

  //Subscription
  private userSub : Subscription;
  
  constructor(private authService : AuthService, private router: Router) { }

  isLoggedIn: boolean = false
  ngOnInit(): void {

    this.userSub = this.authService.loginStatus.subscribe(
      (isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      }
    );
    
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/login'])
  }
  

}
