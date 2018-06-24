import { Directive, TemplateRef, Component, Input, OnInit, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { APIService } from '../api.service';
import { MatSort, MatPaginator } from '@angular/material';
import { CommonModule } from '@angular/common';
import { CdkTableModule  } from '@angular/cdk/table';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  value = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | null;
  @ViewChild(MatSort) sort: MatSort;

  @Input() path = 'test-local';
  @Input() displayedColumns: any[] = [];
  dataSource: MyDataSource;
  dataSubject = new BehaviorSubject<any[]>([]);

  constructor(private apiService: APIService) { }

  ngOnInit() {
    this.dataSource =  new MyDataSource(this.dataSubject);
    this.apiService.getData(this.path).subscribe({
      next: value => this.dataSubject.next(value)
    });
  }

}
export class MyDataSource extends DataSource<any[]> {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private subject: BehaviorSubject<any[]>) {
    super ();
  }
  connect (): Observable<any[]> {
    return this.subject.asObservable();
  }
  disconnect (): void {}
}
