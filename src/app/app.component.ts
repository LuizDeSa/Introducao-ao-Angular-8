import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//associa esse component a uma tag:: <app-root> </app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //indicando qual é o estilo que esse component vai utilizar;
})
export class AppComponent {
  title = 'course-manager';

  name: string = 'Luiz Alberto'



}
