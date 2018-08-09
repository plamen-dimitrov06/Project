import { MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, ElementRef, OnDestroy } from '@angular/core';
import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material-module/my-own-custom-material-module.module';
import { Chart } from 'chart.js';
import { Title } from '@angular/platform-browser';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
})
export class SideNavComponent implements OnInit, OnDestroy {
  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
  value = '';
  search = false;
  navItems = Array();
ngOnInit() {
  const data = { key: 'Начало', value: 'home'};
  this.navItems.push(data);
  const data2 = {key: 'Структура', value: 'structure'};
  this.navItems.push(data2);
  const data3 = { key: 'Потребители', value: 'users'};
  this.navItems.push(data3);
  const data4 = { key: 'Дисциплини', value: 'subjects'};
  this.navItems.push(data4);
  const data5 = { key: 'Факултети', value: 'faculties'};
  this.navItems.push(data5);
  const data6 = { key: 'Специалности', value: 'courses'};
  this.navItems.push(data6);
}

  constructor(public auth: AuthenticationService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private elementRef: ElementRef,
    private titleService: Title) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
  }
}
