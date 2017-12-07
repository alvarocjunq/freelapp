import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routing';
import { MaterializeModule } from 'angular2-materialize';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos/cursos.service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AlunosDetalheComponent } from './alunos/alunos-detalhe/alunos-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { LoginService } from './login/login.service';
import { AlunosService } from './alunos/alunos.service';
import { LoginGuard } from './login/login.guard';
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CursosComponent,
    CursoDetalheComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    AlunosComponent,
    AlunosDetalheComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    MaterializeModule,
    HttpModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [CursosService, LoginService, LoginGuard, AlunosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
