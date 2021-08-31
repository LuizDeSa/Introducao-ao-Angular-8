import { NavBarComponent } from './nav-bar/nav-bar.component';
//se tivermos outra forma de segregar os arquivos, podemos assim realiza-la

import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    NavBarComponent
  ]
})
export class CoreModule{

}
