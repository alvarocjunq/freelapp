import { Routes } from '@angular/router';

import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
import { AlunosDetalheComponent } from './alunos/alunos-detalhe/alunos-detalhe.component';
import { AlunosComponent } from './alunos/alunos.component';
import { HomeComponent } from './home/home.component';
import { LoginGuard } from './login/login.guard';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cursos/busca', component: CursosComponent, canActivate: [LoginGuard] },
  { path: 'curso/:id', component: CursoDetalheComponent, canActivate: [LoginGuard] },
  { path: 'alunos', component: AlunosComponent, canActivate: [LoginGuard]},
  { path: 'alunos/:id', component: AlunosDetalheComponent, canActivate: [LoginGuard]},
  { path: '**', redirectTo: 'login', pathMatch: 'full'}
]

