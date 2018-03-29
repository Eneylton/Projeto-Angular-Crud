import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AlunoPesquisarComponent } from './pesquisar-aluno/aluno-pesquisar/aluno-pesquisar.component';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core';
import { AlunoComponent } from './cadastro-aluno/aluno/aluno.component';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';


import { AppComponent } from './app.component';
import { PesquisarAlunoModule } from './pesquisar-aluno/pesquisar-aluno.module';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'alunos', component: AlunoPesquisarComponent },
  { path: 'alunos/:codigo', component: AlunoComponent },
  { path: 'alunos/novo', component: AlunoPesquisarComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CadastroAlunoModule,
    PesquisarAlunoModule,
    CoreModule,
    HttpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
