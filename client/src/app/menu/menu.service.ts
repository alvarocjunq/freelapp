import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Menu } from './menu.model';



@Injectable()
export class MenuService {
    private urlMenu: string = 'http://localhost:4201/api/menu';

    constructor(private http: Http){}
    
    getMenu(): Observable<Menu[]>{
        return this.http.get(this.urlMenu).map(resp => resp.json())
    }
}