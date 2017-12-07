import { User } from './login/user.model';
import { Component } from '@angular/core';
import { LoginService } from "./login/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent{
  
  exibeHome: boolean = false;
  exibeLogin: boolean = true;

  constructor(private loginService: LoginService){}

  login(user: User){
    this.loginService.login(user).subscribe(res => {
      this.exibeHome = true;
      this.exibeLogin = false;
    });
  }

}
