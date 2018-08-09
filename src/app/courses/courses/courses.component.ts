import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  search: string;
  actions = [{key: 'edit', value: '/courses/course-edit', title: 'Редактиране на специалност'},
            { key: 'closed', value: '/courses/course-delete', title: 'Изтриване на специалност'}];
  courses: Object;
  constructor(private http: HttpClient,
              private titleService: Title) { }
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data => {
      this.courses = data;
    });
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
