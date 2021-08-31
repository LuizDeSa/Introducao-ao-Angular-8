import { StarComponent } from './../star/star.component';
import { RepleacePipe } from './../pipe/repleace.pipe';
import { FormsModule } from '@angular/forms';
import { CourseInfoComponent } from './course-info.component';
import { CourseListComponent } from './course-list.component';
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//o objetivo de um modlo é segrgar as responsabilidades

@NgModule({ // indica para o angular que esta classe é elegivel  para ser um modulo do angular
    declarations:[//informar os pipes os componentes
        CourseListComponent,
        CourseInfoComponent,
        RepleacePipe,
        StarComponent
    ],
    imports:[ //quais são os modulos que esse modulo vai necessitar para o seu funcionamento adequado.
        CommonModule, // serve para pegar os recursos basicos do angular, como os pipes
        FormsModule,
        RouterModule.forChild([
          {
            path: 'courses', component: CourseListComponent // quando utilizamor rotas, o selector perde o sentido, pois o componente agora é ativado com a rota e não mais com o selector;
          },
          {
            path: 'courses/info/:id', component: CourseInfoComponent // como não se trata de uma rota normal é necessario adicionar o nome de uma variavel no path variable
          }
        ])
    ]
})
export class CourseModule{

}
