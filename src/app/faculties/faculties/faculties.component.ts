import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable} from 'rxjs';
import { Title } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/startWith';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  public cols: Observable<number>;

  faculties: Object;
  actions = [{key: 'edit', value: '/faculties/faculty-edit', title: 'Редактиране на факултет'},
            { key: 'closed', value: '/faculties/faculty-delete', title: 'Изтриване на факултет'}];

  constructor(private http: HttpClient,
              private observableMedia: ObservableMedia,
              private titleService: Title) { }

  ngOnInit() {
    this.http.get('/api/structure').subscribe(data => {
      this.faculties = data;
  });

  const grid = new Map([
    ['xs', 1],
    ['sm', 2],
    ['md', 2],
    ['lg', 3],
    ['xl', 3]
  ]);

  let start: number;

  grid.forEach((cols, mqAlias) => {
    if (this.observableMedia.isActive(mqAlias)) {
      start = cols;
    }
  });

  this.cols = this.observableMedia.asObservable()
    .map(change => {
      console.log(change);
      console.log(grid.get(change.mqAlias));
      return grid.get(change.mqAlias);
    })
    .startWith(start);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
