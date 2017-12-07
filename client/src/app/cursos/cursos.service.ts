import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import 'rxjs/add/operator/map';

import { Curso } from './cursos.model';

@Injectable()
export class CursosService {

  cursos: Curso[] = []

  private readonly url: string = 'http://localhost:4201/api/courses/search-by-id/';
  private readonly urlDelete: string = 'http://localhost:4201/api/courses/remove/';
  private readonly urlName: string = 'http://localhost:4201/api/courses/search-by-name/';
  private readonly urlSubmit: string = 'http://localhost:4201/api/course/new';
  private readonly urlUpdate: string = 'http://localhost:4201/api/courses/update';
  private readonly urlGetAll: string = 'http://localhost:4201/api/courses/all';

  constructor(private http: Http) {}

  getByName(name: string): Observable<Curso[]> {
    return this.http.get(this.urlName + name).map(res => res.json())
  }

  getAll(): Observable<Curso[]> {
    return this.http.get(this.urlGetAll).map(res => res.json());
  }

  getByID(id: string): Observable<Curso> {
    return this.http.get(this.url + id ).map(res => res.json())
  }

  save(curso: Curso): Observable<Response> {
    if(curso.id === 0){
      return this.http.post(this.urlSubmit, curso).map(res => res.json())
    }
    else {
      return this.http.put(this.urlUpdate, curso).map(resp => resp.json())
    }
  }

  delete(id: number): Observable<Response>{
    return this.http.delete(this.urlDelete + id).map(resp => resp.json())
  }
  
}
