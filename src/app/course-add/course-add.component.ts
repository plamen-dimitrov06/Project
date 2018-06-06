import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course = {};

  bachelors = 'Бакалавър';
  masters = 'Магистър';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addCourse() {
    this.http.post('/api/courses/course-add', this.course).subscribe(() => {
        this.router.navigateByUrl('/courses');
        }, (err) => {
          console.log(err);
        }
      );
    }
}
