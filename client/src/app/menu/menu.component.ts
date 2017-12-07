import { MenuService } from './menu.service';
import { Component } from '@angular/core';

import { Menu } from './menu.model';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    providers:[MenuService]
})

export class MenuComponent {

    menus: Menu[] = []
    constructor(private menuService: MenuService){

    }

    ngOnInit(){
        this.menuService.getMenu().subscribe((menu: Menu[]) => {
            this.menus = menu;
        })
    }


}