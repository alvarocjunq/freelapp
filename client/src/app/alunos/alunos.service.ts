import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import Aluno from './aluno.model';

@Injectable()
export class AlunosService {

  alunos: Aluno[] = []

  private readonly url: string = 'http://localhost:4201/api/alunos/search-by-id/';
  private readonly urlDelete: string = 'http://localhost:4201/api/alunos/remove/';
  private readonly urlName: string = 'http://localhost:4201/api/alunos/search-by-name/';
  private readonly urlSubmit: string = 'http://localhost:4201/api/aluno/new';
  private readonly urlUpdate: string = 'http://localhost:4201/api/alunos/update';

  constructor(private http: Http) { }

  getByName(name: string): Observable<Aluno[]> {
    return this.http.get(this.urlName + name).map(res => res.json())
  }

  getByID(id: string): Observable<Aluno> {
    return this.http.get(this.url + id ).map(res => res.json())
  }

  save(aluno: Aluno): Observable<Response> {
    if(aluno.id === 0){
      // Inserir
      return this.http.post(this.urlSubmit, aluno).map(res => res.json())
    }
    else {
      // Atualizar
      return this.http.put(this.urlUpdate, aluno).map(resp => resp.json())
    }
  }

  delete(id: number): Observable<Response>{
    return this.http.delete(this.urlDelete + id).map(resp => resp.json())
  }

}

