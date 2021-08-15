import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectInfo } from '../subject.info';

@Component({
  selector: 'app-subject-delete',
  templateUrl: './subject-delete.component.html',
  styleUrls: ['./subject-delete.component.css']
})
export class SubjectDeleteComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  subject = <SubjectInfo>{};
  // defining properties so they are present in the template
  yes = 'yes';
  no = 'yes';
  exam = 'grade';
  grade = 'grade';

  ngOnInit() {
    this.getSubject(this.route.snapshot.params['id']);
  }
  getSubject(id) {
    this.http.get('/api/subjects/subject-delete' + id).subscribe(data => {
      this.subject = <SubjectInfo>data;
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
