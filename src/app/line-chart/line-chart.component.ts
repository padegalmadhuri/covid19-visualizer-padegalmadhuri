import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { JwtService } from '../jwt.service'
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  doughNut;
arraysample;
arraysample1;
arraysample2;
  constructor(private auth:JwtService){
  this.auth.retiveBarChartData().subscribe((data) => {
    this.doughNut = data;

    for(let i=0;i<1;i++){
      this.arraysample=this.doughNut.confirmed.value
      this.arraysample1=this.doughNut.recovered.value
      this.arraysample2=this.doughNut.deaths.value
    }
  })
}
  ngOnInit(){
  }
  public doughnutChartLabels:string[] = ['Confirmed' ,'Recovered', 'Deaths'];
  public demodoughnutChartData:number[] = [190603,91830,5406];
  public doughnutChartType:string = 'doughnut';
 //console.log(this.arraysample);
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
}
