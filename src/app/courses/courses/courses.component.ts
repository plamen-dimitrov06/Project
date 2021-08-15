import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { CourseInfo } from '../course.info';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  actions = [{key: 'edit', value: '/courses/course-edit', title: 'Редактиране на специалност'},
            { key: 'closed', value: '/courses/course-delete', title: 'Изтриване на специалност'}];
  courses: CourseInfo[] = [];
// Table specific variables
  displayedColumns: string[] = ['name', 'degree', 'date', 'actions'];
  dataSource: MatTableDataSource<CourseInfo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private titleService: Title) { }


  ngOnInit() {
    this.http.get<CourseInfo[]>('/api/courses').subscribe(data => {
      this.dataSource = new MatTableDataSource<CourseInfo>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
