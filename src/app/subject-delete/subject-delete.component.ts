import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  subject: {};

  ngOnInit() {
    this.getSubject(this.route.snapshot.params['id']);
  }
  getSubject(id) {
    this.http.get('/api/subjects/subject-delete' + id).subscribe(data => {
      this.subject = data;
    });
  }

  deleteSubject(id) {
    this.http.delete('/api/subjects/subject-delete' + id).subscribe(() => {
      this.router.navigateByUrl('/subjects');
      }, (err) => {
          console.log(err.message);
        }
      );
  }

}
