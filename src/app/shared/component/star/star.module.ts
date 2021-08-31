import { StarComponent } from './star.component';
import { NgModule } from "@angular/core";

@NgModule({
  declarations:[
    StarComponent
  ],
  exports:[ //fica o que que a gente quer exportar desse modulo
    StarComponent
  ]
})
export class StarModule{

}
