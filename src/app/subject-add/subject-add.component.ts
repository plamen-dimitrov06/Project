import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthenticationService, TokenPayload } from '../authentication.service';

@Component({
  selector: 'app-subject-add',
  templateUrl: './subject-add.component.html',
  styleUrls: ['./subject-add.component.css']
})
export class SubjectAddComponent implements OnInit {

  selection: string;
  yes = true;
  no = false;
  exam = 'Изпит';
  grade = 'Текуща оценка';
  author = this.auth.getUserDetails()._id;
  subject = {
    evaluation : '',
    courseWork : '',
    author: this.author
  };

  constructor(private http: HttpClient, private router: Router, public auth: AuthenticationService) { }

  ngOnInit() {
  }

  addSubject() {
    this.http.post('/api/subjects/subject-add', this.subject).subscribe(() => {
        this.router.navigateByUrl('/subjects');
        }, (err) => {
          console.log(err);
        }
      );
    }

}
