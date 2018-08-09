import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FacultyInfo } from '../faculty.info';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacultyAddComponent implements OnInit {

  faculty = <FacultyInfo>{ };

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addFaculty() {
    this.http.post('/api/faculties/faculty-add', this.faculty).subscribe(() => {
        this.router.navigateByUrl('/faculties');
        }, (err) => {
          console.log(err);
        }
      );
    }
}
