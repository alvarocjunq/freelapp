import { Component, ElementRef, Output, EventEmitter } from '@angular/core';

import { LoginService } from './../login/login.service';
declare var $ :any;


@Component({
    selector: 'header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {

    @Output() efetuarLogout = new EventEmitter();
    
    constructor(
        private el: ElementRef,
        private loginService: LoginService
    ){}

    ngOnInit(){
        $(this.el.nativeElement).find('.button-collapse').sideNav({
            menuWidth: 300,
            edge: 'left',
            closeOnClick: true,
            draggable: true
        });
    }

    logout(){
        this.loginService.logout();
    }

}