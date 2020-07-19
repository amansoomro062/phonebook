import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {AuthService} from './components/login/auth.service'
import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable(
    {
        providedIn:'root'
    }
)
export class LoginGaurd implements CanActivate, OnDestroy{

    constructor(private authService: AuthService, private router: Router) {

    }
    
    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    isLoggedIn: boolean = false
    private userSub : Subscription;


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
        ) : Observable<boolean> | Promise<boolean> | boolean | Subject<boolean> {
        // status : boolean = this.authService.loginStatus;
        
        // this.isLoggedIn = this.authService.loginStatus.pipe(map(isLoggedIn => {
        //     return isLoggedIn;
        // }))


        this.userSub = this.authService.loginStatus.subscribe(
            (isAuthenticated) => {
              this.isLoggedIn = isAuthenticated;
            }
          );

    
        
        if(this.isLoggedIn) {
            this.router.navigate(['/phone'])
            return false
        } else {
            return true;
        }
    }
}