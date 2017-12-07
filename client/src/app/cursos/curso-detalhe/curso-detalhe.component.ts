import { FormGroup, FormBuilder } from '@angular/forms';
import swal from 'sweetalert2'
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { Location } from '@angular/common';
import { Response } from '@angular/http';
import "rxjs/add/operator/takeWhile";

import { CursosService } from './../cursos.service';
import { Curso } from './../cursos.model';


@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html'
})
export class CursoDetalheComponent {

  id: string;
  private inscrever: boolean = true;
  
  curso: Curso = new Curso();
  formulario: FormGroup;

  constructor(private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router,
    private location: Location,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: [null],
      teacher: [null],
      dateCreation: [null],
      id: [null]
    })

    this.route.params.takeWhile(() => this.inscrever).subscribe((parametro: any) => {
      this.id = parametro.id;
      if (this.id !== "0") {
        this.cursoService.getByID(this.id).takeWhile(() => this.inscrever).subscribe((curso: Curso) => {
          this.curso = curso;
        })
      }
    })
  }

  remover() {
    swal({
      title: 'Deseja deletar?',
      text: 'A ação não poderá ser desfeita!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, deletar!'
    }).then((result) => {
      if (result.value) {
        this.cursoService.delete(this.curso.id).takeWhile(() => this.inscrever).subscribe(() => {
          swal(
            'Deletado!',
            'Curso deletado com sucesso',
            'success'
          )
          this.router.navigate(['/cursos/busca']);
        })
      }
    })
  }
  
  save() {
    let curso: Curso = this.formulario.value;
    curso.id = +this.id;
    this.cursoService.save(curso).takeWhile(() => this.inscrever).subscribe((res: Response) => {
      swal(
        'Salvo!',
        'Curso salvo com sucesso',
        'success'
      )
      this.router.navigate(['/cursos/busca']);
      
    })
  }

 
  voltar(): void {
    this.location.back();
  }
  
  ngOnDestroy() {
    this.inscrever = false;
  }
}
