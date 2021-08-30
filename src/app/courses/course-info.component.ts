import { CourseService } from './course.service';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

  course!: Course;

  //  aux = '';

  //aqui ele reliza a injeção de depêndencia
  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService){}

  ngOnInit(): void {//temos que adicionar um if no template para garantir que o formulario só sera exibido se todas as informações tiverem sido carregadas pois o angular é assincrono

    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;

    // this.course = this.courseService.retrievelById(+(this.activatedRoute.snapshot.paramMap.get('id')||'-1'));

    this.courseService.retrievelById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
      next: course =>this.course = course,
      error: err => console.log('Error: ', err)
    });
  }

  save(): void{
    this.courseService.save(this.course).subscribe({
      next: course => this.course = course,
      error: err => console.log('Error: ', err)
    });
  }

}
