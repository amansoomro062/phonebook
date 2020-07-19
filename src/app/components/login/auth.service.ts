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
            this.loginStatus.next(true)
            return true
        } else {
            this.loginStatus.next(false)
            return false
        }
    }

    logout() {
        this.loginStatus.next(false)
    }
}