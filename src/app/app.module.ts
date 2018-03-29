import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule} from '@angular/core';
import { AlunoComponent } from './cadastro-aluno/aluno/aluno.component';
import { CadastroAlunoModule } from './cadastro-aluno/cadastro-aluno.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CadastroAlunoModule,
    CoreModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
