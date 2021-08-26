import { Component } from "@angular/core";

//diz para o angular que essa classe será im component
@Component({
  selector: 'app-course-list', // é importante ter alguma coisa que o diferencie das outras tags html -> app-*
  templateUrl: './course-list.component.html' //Entretando, o codigo fica mais organizado se criarmos um tamplate html para o component.
  //template: '<h2> Course List </h2>' //template statico -> caso o html não passe de  linhas, pode ser utilizado dessa forma.
})
export class CourseListComponent{ //deizando esta classe publica para que seja acessada em outros locais.



}
