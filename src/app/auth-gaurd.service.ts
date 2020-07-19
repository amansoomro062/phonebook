import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {AuthService} from './components/login/auth.service'
import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable(
    {
        providedIn:'root'
    }
)
export class AuthGaurd implements CanActivate, OnDestroy{

    constructor(private authService: AuthService, private router: Router) {

    }
    
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    isLoggedIn: boolean = false
    private userSub : Subscription;


    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean | Subject<boolean> {


        this.userSub = this.authService.loginStatus.subscribe(
            (isAuthenticated) => {
              this.isLoggedIn = isAuthenticated;
              console.log(this.isLoggedIn);
            }
          );
        if(this.isLoggedIn) {
            console.log("Okay boss");
            return true;
        } else {
            this.router.navigate(['/login'])
            console.log("Sorry boss!");
            
            return false
        }
    }
}