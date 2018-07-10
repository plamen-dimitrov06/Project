import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  search: string;
  actions = [{key: 'edit', value: '/courses/course-edit'}, { key: 'closed', value: '/courses/course-delete'}];
  test: Object;
  arr: Array<CourseData[]>;
  displayedColumns: Array<String>;
  dataSource: MatTableDataSource<Object[]>;
  constructor(private http: HttpClient) { }
  data: Object[];
  ngOnInit() {
    this.http.get('/api/courses').subscribe(data => {
      this.test = data;
      this.arr = Object.keys(this.test).map(key => this.test[key]);
      this.displayedColumns = ['id', 'name', 'progress', 'color'];
      this.dataSource = new MatTableDataSource(this.arr);
    });

  }
  ngAfterViewInit() {
  }

  findCourse(searchValue: string) {
    this.http.get('/api/courses').subscribe(data => {
      this.test = data;
      console.log(this.test);
    });
  }
}

export interface CourseData {
  id: string;
  name: string;
  abbreviation: string;
  description: string;
  courseDegree: string;
}

// const courses: Object[] = [];
// const arr = Object.keys(this.test).map(key => this.test[key]);
 // for (let i = 1; i <= arr.length; i++) { courses.push(arr[i]); }

// Assign the data to the data source for the table to render
// this.dataSource = new MatTableDataSource(arr);
