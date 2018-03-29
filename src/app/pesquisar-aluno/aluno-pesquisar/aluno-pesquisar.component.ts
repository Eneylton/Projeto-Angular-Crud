import { PesquisarAlunoService } from './../pesquisar-aluno.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { PesquisarAlunoModule } from '../pesquisar-aluno.module';

@Component({
  selector: 'app-aluno-pesquisar',
  templateUrl: './aluno-pesquisar.component.html',
  styleUrls: ['./aluno-pesquisar.component.css']
})
export class AlunoPesquisarComponent implements OnInit {


  @Input()  alunos = [];
  @ViewChild('tabela') grid;

  constructor(
    private pesquisaService: PesquisarAlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService

  ) { }

  ngOnInit() {

    this.pesquisar();
  }

  pesquisar() {
    this.pesquisaService.pesquisar()
      .then(alunos => this.alunos = alunos).catch(erro => this.errorHandler.handle(erro));
  }



  excluir(codigo: number) {
    this.pesquisaService.remover(codigo)
      .then(() => {
        if (this.grid.first === 0){
          this.pesquisar();
        }else{

          this.grid.first = 0;
        }

        this.toasty.success('Aluno excluído com sucesso!');
      });
  }


}
