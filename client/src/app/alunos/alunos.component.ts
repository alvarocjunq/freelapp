import { AlunosService } from './alunos.service';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy } from '@angular/core';
import "rxjs/add/operator/takeWhile";

import Aluno from './aluno.model';
import swal from 'sweetalert2'

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})

export class AlunosComponent implements OnDestroy{
  alunos: Aluno[] = []

  pages: number = 1;

  constructor(
    private alunoservice: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  search(name: string) {
    if(!name) return;
    this.alunoservice.getByName(name).subscribe((alunos: Aluno[]) => {
      this.alunos = alunos;
    })
  }

  remover(aluno: Aluno) {
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
        this.alunoservice.delete(aluno.id).subscribe(() => {
          this.alunos = this.alunos.filter((value) => {
            return value.id !== aluno.id;
          })
          swal(
            'Deletado!',
            'Aluno deletado com sucesso',
            'success'
          )
        })
      }
    })
  }

  ngOnDestroy(){

  }
}
