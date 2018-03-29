import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoPesquisarComponent } from './pesquisar-aluno/aluno-pesquisar/aluno-pesquisar.component';
import { AlunoComponent } from './cadastro-aluno/aluno/aluno.component';


const routes: Routes = [
  { path: 'alunos', component: AlunoPesquisarComponent },
  { path: 'alunos/:codigo', component: AlunoComponent },
  { path: 'alunos/novo', component: AlunoPesquisarComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
