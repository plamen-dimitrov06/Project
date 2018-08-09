import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FacultyInfo } from '../faculty.info';

@Component({
  selector: 'app-faculty-edit',
  templateUrl: './faculty-edit.component.html',
  styleUrls: ['./faculty-edit.component.css']
})
export class FacultyEditComponent implements OnInit {

  faculty = <FacultyInfo>{};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFaculty(this.route.snapshot.params['id']);
  }

  getFaculty(id) {
    this.http.get('/api/faculties/faculty-edit' + id).subscribe(data => {
      this.faculty = <FacultyInfo>data;
    });
  }

  updateFaculty(id, faculty) {
    this.http.put('/api/faculties/faculty-edit' + id, this.faculty).subscribe(() => {
      this.router.navigateByUrl('/faculties');
      }, (err) => {
          console.log(err.message);
        }
      );
  }
}
