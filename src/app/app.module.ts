import { Erro404Component } from './erro-404/erro-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepleacePipe } from './pipe/repleace.pipe';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './courses/course-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [//onde eu declaro os modulos que estão na aplicação
    AppComponent,
    CourseListComponent,
    StarComponent,
    RepleacePipe,
    NavBarComponent,
    Erro404Component
  ],
  imports: [ // onde de fato nos importamos os nosso modulos externos e internos
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo:'courses', pathMatch: 'full' // rota padrão do angular
      },
      {
        path: 'courses', component: CourseListComponent // quando utilizamor rotas, o selector perde o sentido, pois o componente agora é ativado com a rota e não mais com o selector;
      },
      {
        path: '**', component: Erro404Component//quando não encontra a rota // rota padrão do angular
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
