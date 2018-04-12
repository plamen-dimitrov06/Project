import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {

  selected = false;
  actions = Array('arrow_upward','arrow_downward','closed');
  constructor() { }

  structure = [
    {value: 'tree-0', viewValue: 'Дървовидна'},
    {value: 'input-1', viewValue: 'Форма'}
  ];
  value = null;
  ngOnInit() {
  }
}
