import {Injectable} from '@angular/core'
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    loginStatus = new Subject<boolean>();
    username = "aman"
    password = "aman"

    constructor() {}
    login(username: string, password: string) {

        if(this.username == username && this.password == password) {
            console.log("login successful");
            this.loginStatus.next(true)
            return true
        } else {
            console.log("access denied");
            this.loginStatus.next(false)
            return false
        }
    }

    logout() {
        this.loginStatus.next(false)
    }
}