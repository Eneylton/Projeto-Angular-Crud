import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DataTableModule } from 'primeng/components/datatable/datatable';
import { AlunoPesquisarComponent } from './aluno-pesquisar/aluno-pesquisar.component';
import { ButtonModule } from 'primeng/components/button/button';



@NgModule({
  imports: [
    CommonModule,
    DataTableModule,
    ButtonModule,
    RouterModule
  ],
  declarations: [AlunoPesquisarComponent],
  exports: [AlunoPesquisarComponent]

})
export class PesquisarAlunoModule { }
