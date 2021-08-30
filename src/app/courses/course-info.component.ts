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

  ngOnInit(): void {

    // this.courseId = +this.activatedRoute.snapshot.paramMap.get('id')!;

    this.course = this.courseService.retrievelById(+(this.activatedRoute.snapshot.paramMap.get('id')||'-1'));

  }

  save(): void{
    this.courseService.save(this.course);
  }

}
