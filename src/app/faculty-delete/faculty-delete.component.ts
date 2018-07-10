import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty-delete',
  templateUrl: './faculty-delete.component.html',
  styleUrls: ['./faculty-delete.component.css']
})
export class FacultyDeleteComponent implements OnInit {

  faculty = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getFaculty(this.route.snapshot.params['id']);
  }

  getFaculty(id) {
    this.http.get('/api/faculties/faculty-delete' + id).subscribe(data => {
      this.faculty = data;
    });
  }

  deleteFaculty(id) {
    this.http.delete('/api/faculties/faculty-delete' + id).subscribe(() => {
      this.router.navigateByUrl('/faculties');
      }, (err) => {
          console.log(err.message);
        }
      );
  }

}
