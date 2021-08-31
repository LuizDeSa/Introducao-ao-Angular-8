import { RepleacePipe } from './repleace.pipe';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    RepleacePipe
  ],
  exports:[
    RepleacePipe
  ]
})
export class AppPipeModule{ // se aplicação tiver varios contextos de pipes é recomendado segrar os pipes em mais modulos

}
