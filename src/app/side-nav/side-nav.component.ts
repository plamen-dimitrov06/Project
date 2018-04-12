import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material-module/my-own-custom-material-module.module'
import { Chart } from 'chart.js';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  mobileQuery: MediaQueryList;
  value = '';
  search = false;
  navItems = Array();
  currentNavItem = 'Начало';
ngOnInit(){
  let data = { key: 'Начало', value: 'home'};
  this.navItems.push(data);
  let data2 = {key:'Структура', value:'structure'};
  this.navItems.push(data2);
  let data3 = { key:'Потребители', value: 'users'}
  this.navItems.push(data3);
  let data4 = { key:'Дисциплини', value: 'subjects'}
  this.navItems.push(data4);
  let data5 = { key:'Факултети', value: 'faculties'}
  this.navItems.push(data5);
  let data6 = { key:'Статистика', value: 'stats'}
  this.navItems.push(data6);
}
  private _mobileQueryListener: () => void;
//   'Начало','Структура','Потребители','Дисциплини','Факултети','Статистика'
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private elementRef: ElementRef) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
