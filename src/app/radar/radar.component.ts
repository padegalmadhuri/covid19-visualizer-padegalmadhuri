import { Component, OnInit } from '@angular/core';
import { ChartDataSets, RadialChartOptions,ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {
  // Radar
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Confirmed', 'Recovered', 'Deaths'];

  public radarChartData: ChartDataSets[] = [
    { data: [190603,91830,5406], label: 'Corona' },

  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }


}
