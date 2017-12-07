import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { User } from './user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

    constructor(private router: Router, private http: Http) { }

    private urlAuthLogin = 'http://localhost:4201/api/login';
    private urlAuthLogged = 'http://localhost:4201/api/logged';

    private readonly TOKEN_LOGIN: string = 'tokenLogin';

    logout() {
        sessionStorage.removeItem(this.TOKEN_LOGIN);
        this.router.navigate(['/logout']);
    }

    login(user: User): Observable<Response> {
        sessionStorage.removeItem(this.TOKEN_LOGIN);

        return this.http.post(this.urlAuthLogin, user)
            .map((value: Response) => {
                let responseLogin = value.json();
                sessionStorage.setItem(this.TOKEN_LOGIN, responseLogin);
                return responseLogin;
            });
    }

    isLogged(): Observable<boolean> {
        let user: User = new User();
        user.tokenLogin = sessionStorage.getItem(this.TOKEN_LOGIN);
        return this.http.post(this.urlAuthLogged, user).map((value: Response) => {
            return value.json().valid;
        });
    }
}