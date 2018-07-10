import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  selection: any;

  actions = Array('arrow_upward', 'arrow_downward', 'closed');
  constructor(private http: HttpClient) { }
  test: Object;

  structure = [
    {value: 'tree-0', viewValue: 'Дървовидна'},
    {value: 'input-1', viewValue: 'Форма'}
  ];

  value = null;
  ngOnInit() {
    this.http.get('/api/structure').subscribe(data => {
      this.test = data;
      console.log(this.test);
    });
  }
}
