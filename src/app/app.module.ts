import { RepleacePipe } from './pipe/repleace.pipe';
import { StarComponent } from './star/star.component';
import { CourseListComponent } from './courses/course-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [//onde eu declaro os modulos que estão na aplicação
    AppComponent,
    CourseListComponent,
    StarComponent,
    RepleacePipe
  ],
  imports: [ // onde de fato nos importamos os nosso modulos externos e internos
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
