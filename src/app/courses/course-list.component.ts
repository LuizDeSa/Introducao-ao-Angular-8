import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

//diz para o angular que essa classe será im component
@Component({
  selector: 'app-course-list', // é importante ter alguma coisa que o diferencie das outras tags html -> app-*
  templateUrl: './course-list.component.html' //Entretando, o codigo fica mais organizado se criarmos um tamplate html para o component.
  //template: '<h2> Course List </h2>' //template statico -> caso o html não passe de  linhas, pode ser utilizado dessa forma.
})
export class CourseListComponent implements OnInit{ //deizando esta classe publica para que seja acessada em outros locais.

  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filterBy!: string;

  constructor(private couseService: CourseService){ } //dessa forma o angular vai realizar a injeção de dependencia.

  ngOnInit():void{
    this._courses = this.couseService.retrievelAll();
    this.filteredCourses = this._courses;
  }


  set filter(value: string){
    this._filterBy = value;
    this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase())>-1);
  }

  get filter(){
    return this._filterBy;
  }

}
