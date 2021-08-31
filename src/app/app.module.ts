import { CourseModule } from './courses/course.module';
import { Erro404Component } from './erro-404/erro-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [//onde eu declaro os componentes e os pipes que estão na aplicação
    AppComponent,
    NavBarComponent,
    Erro404Component
  ],
  imports: [ // onde de fato nos importamos os nosso modulos externos e internos
    BrowserModule,
    HttpClientModule,
    CourseModule, // o angular não permite importar o mesmo componente em dois lugares distintos
    RouterModule.forRoot([
      {
        path: '', redirectTo:'courses', pathMatch: 'full' // rota padrão do angular
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
