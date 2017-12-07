import { Subscription } from 'rxjs/Subscription';
import { Curso } from './cursos.model';
import { CursosService } from './cursos.service';
import { Component, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnDestroy {

  public cursos: Curso[];
  private inscrever: boolean = true;

  constructor(private cursosService: CursosService) { }

  ngOnInit() {}

  search(name: string) {
    if(!name){
      return;      
    }
    this.cursosService.getByName(name).takeWhile(() => this.inscrever).subscribe((cursos: Curso[]) => {
      this.cursos = cursos;
    })
  }

  ngOnDestroy() {
    this.inscrever = false;
  }
}
