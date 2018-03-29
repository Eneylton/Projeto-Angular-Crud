import { CadastroAlunoModule } from './../cadastro-aluno.module';
import { CadastroAlunoService } from './../cadastro-aluno.service';
import { Component, OnInit, Input } from '@angular/core';
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
    this.cadastroAlunoService.adicionar(this.aluno)
      .then(() => {
        form.reset();
        this.toasty.success('Aluno cadastrado com sucesso!');

      })
      .catch(erro => this.errorHandler.handle(erro));
  }

}
