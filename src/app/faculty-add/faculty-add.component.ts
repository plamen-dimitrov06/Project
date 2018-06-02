import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-add',
  templateUrl: './faculty-add.component.html',
  styleUrls: ['./faculty-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FacultyAddComponent implements OnInit {

  faculty = {};

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addFaculty() {
    this.http.post('/api/structure/faculty-add', this.faculty)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigateByUrl("/structure");
        }, (err) => {
          console.log(err);
        }
      );
    }
}
