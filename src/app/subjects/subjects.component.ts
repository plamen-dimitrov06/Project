import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  test = {};

  constructor(auth: AuthenticationService, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/subjects').subscribe(data => {
      this.test = data;
    });
  }

}
