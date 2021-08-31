import { NavBarComponent } from './nav-bar/nav-bar.component';
//se tivermos outra forma de segregar os arquivos, podemos assim realiza-la

import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { Erro404Component } from './erro-404/erro-404.component';

@NgModule({
  declarations: [
    NavBarComponent,
    Erro404Component
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Erro404Component//quando não encontra a rota // rota padrão do angular
      }
    ])
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule{

}
