import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from './user.info';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserInfo[] = [];
  displayedColumns: string[] = ['name', 'type', 'date', 'actions'];
  dataSource: MatTableDataSource<UserInfo>;
  actions = [{key: 'arrow_upward', value: '/faculties/faculty-edit', title: 'Редактиране на факултет'},
            { key: 'edit', value: '/faculties/faculty-delete', title: 'Изтриване на факултет'},
            { key: 'closed', value: '/faculties/faculty-delete', title: 'Изтриване на факултет'}];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient,
              private titleService: Title) { }

  ngOnInit() {
    this.http.get<UserInfo[]>('/api/users').subscribe((data) => {
      this.dataSource = new MatTableDataSource<UserInfo>(data);
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
