import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MediaObserver } from '@angular/flex-layout';
import { Observable} from 'rxjs';
import { Title } from '@angular/platform-browser';
import { map } from 'rxjs/operators'; // TODO: check if these are needed
import { takeWhile } from 'rxjs/operators';
import { startWith } from 'rxjs/operators';

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
              private observableMedia: MediaObserver,
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

  // TODO : rewrite this.
  // this.cols = this.observableMedia.asObservable()
  //   .map(change => {
  //     return grid.get(change.mqAlias);
  //   })
  //   .startWith(start);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
