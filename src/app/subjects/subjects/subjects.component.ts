import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../../authentication.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  subjects = {};
  actions = [{key: 'edit', value: '/subjects/subject-edit', title: 'Редактиране на дисциплина' },
            { key: 'closed', value: '/subjects/subject-delete', title: 'Изтриване на дисциплина'}];
  constructor(auth: AuthenticationService,
              private http: HttpClient,
              private titleService: Title) { }

  ngOnInit() {
    this.http.get('/api/subjects').subscribe(data => {
      this.subjects = data;
    });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

}
