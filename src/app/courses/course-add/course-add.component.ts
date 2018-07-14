import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit {

  course = {};
  faculties = {};
  bachelors = 'Бакалавър';
  masters = 'Магистър';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('/api/structure').subscribe(data => {
      this.faculties = data;
    });
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
