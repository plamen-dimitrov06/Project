import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SubjectInfo } from '../subject.info';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute) { }

  subject = <SubjectInfo>{};

  ngOnInit() {
    this.getSubject(this.route.snapshot.params['id']);
  }

  getSubject(id) {
    this.http.get('/api/subjects/subject-edit' + id).subscribe(data => {
      this.subject = <SubjectInfo>data;
    });
  }

  updateSubject(id) {
    this.http.put('/api/subjects/subject-edit' + id, this.subject).subscribe(() => {
      this.router.navigateByUrl('/subjects');
      }, (err) => {
          console.log(err.message);
        }
      );
  }

}
