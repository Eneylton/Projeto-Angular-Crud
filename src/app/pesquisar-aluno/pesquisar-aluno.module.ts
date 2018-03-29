import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { AlunoPesquisarComponent } from './aluno-pesquisar/aluno-pesquisar.component';
import { ButtonModule } from 'primeng/components/button/button';



@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ButtonModule
  ],
  declarations: [AlunoPesquisarComponent],
  exports: [AlunoPesquisarComponent]

})
export class PesquisarAlunoModule { }
