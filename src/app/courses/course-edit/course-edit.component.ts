import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseInfo } from '../course.info';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {

  course = <CourseInfo>{};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params['id']);
  }

  getCourse(id) {
    this.http.get('/api/courses/course-edit' + id).subscribe(data => {
      this.course = <CourseInfo>data;
    });
  }

  updateCourse(id, course) {
    this.http.put('/api/courses/course-edit' + id, this.course).subscribe(() => {
      this.router.navigateByUrl('/courses');
      }, (err) => {
          console.log(err.message);
        }
      );
  }
}
