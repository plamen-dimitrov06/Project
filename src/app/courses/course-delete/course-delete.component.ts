import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-delete',
  templateUrl: './course-delete.component.html',
  styleUrls: ['./course-delete.component.css']
})
export class CourseDeleteComponent implements OnInit {

  course = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCourse(this.route.snapshot.params['id']);
  }

  getCourse(id) {
    this.http.get('/api/courses/course-delete' + id).subscribe(data => {
      this.course = data;
    });
  }

  deleteCourse(id) {
    this.http.delete('/api/courses/course-delete' + id).subscribe(() => {
      this.router.navigateByUrl('/courses');
      }, (err) => {
          console.log(err.message);
        }
      );
  }
}
