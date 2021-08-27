import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

//diz para o angular que essa classe será im component
@Component({
  selector: 'app-course-list', // é importante ter alguma coisa que o diferencie das outras tags html -> app-*
  templateUrl: './course-list.component.html' //Entretando, o codigo fica mais organizado se criarmos um tamplate html para o component.
  //template: '<h2> Course List </h2>' //template statico -> caso o html não passe de  linhas, pode ser utilizado dessa forma.
})
export class CourseListComponent implements OnInit{ //deizando esta classe publica para que seja acessada em outros locais.

  courses: Course[] = [];

  ngOnInit():void{
    this.courses = [
      {
        id: 1,
        name: 'Angular: Forms',
        imageUrl: '/assets/images/forms.png',
        price: 99.99,
        code: 'XPS-8796',
        duration: 120,
        rating: 4.5,
        releaseDate: 'November, 2, 2019'
      },
      {
        id: 2,
        name: 'Angular: HTTP',
        imageUrl: '/assets/images/http.png',
        price: 45.99,
        code: 'LKL-1094',
        duration: 80,
        rating: 4,
        releaseDate: 'December, 4, 2019'
      }
    ]
  }

}
