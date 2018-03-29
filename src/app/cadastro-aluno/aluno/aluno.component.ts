import { CadastroAlunoModule } from './../cadastro-aluno.module';
import { CadastroAlunoService } from './../cadastro-aluno.service';
import { Component, OnInit } from '@angular/core';
import { Aluno } from '../../core/model';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { ToastyService } from 'ng2-toasty';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno = new Aluno();

  constructor(
    private cadastroAlunoService : CadastroAlunoService,
    private toasty: ToastyService,
    private errorHandler: ErrorHandlerService,

  ) { }

  ngOnInit() {
  }

  salvar(form: FormControl) {
    console.log(this.aluno);
  }

}
