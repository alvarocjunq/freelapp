import { Router } from '@angular/router';
import { Component, Output, EventEmitter, Input } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  @Output()
  loginApp = new EventEmitter<User>();
  
  @Input()
  exibeLogin: boolean;

  constructor(private router: Router) { }

  login() {
    this.loginApp.emit(this.user);
    //this.router.navigate(['/cursos/busca'])
  }
}
