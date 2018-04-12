import {MediaMatcher} from '@angular/cdk/layout';
import { Component, OnInit, ChangeDetectorRef, ElementRef } from '@angular/core';
import { MyOwnCustomMaterialModuleModule } from '../my-own-custom-material-module/my-own-custom-material-module.module'
import { Chart } from 'chart.js';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { }

  myChart:any;
  myChart2:any;
  
 ngOnInit(){
  this.chartit();
 }

 chartit(){
    let cty = document.getElementById('canvas');
    this.myChart = new Chart(cty, {
      type: 'pie',
      data: {
          labels: ["1-ви курс", "2-ри курс", "3-ти курс", "4-ти курс"],
          datasets: [{
              label: '# Потребители',
              data: [12, 19, 31, 12],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.3)',
                  'rgba(54, 162, 235, 0.3)',
                  'rgba(255, 206, 86, 0.3)',
                  'rgba(183, 15, 203, 0.3)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(203, 56, 146, 1)'
              ],
              borderWidth: 2
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
    let ctx = document.getElementById('canvas2');
    this.myChart2 = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ["Понеделник", "Вторник", "Сряда", "Четвъртък", "Петък", "Събота"],
          datasets: [{
              label: '# Посещения',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
    });
 } 

}
