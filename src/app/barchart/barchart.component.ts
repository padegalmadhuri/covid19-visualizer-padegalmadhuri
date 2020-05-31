import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { JwtService } from '../jwt.service';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  barChart;
arraysample=[];
arraysample1=[];
arraysample2=[];
  constructor(private auth: JwtService) {
    this.auth.retiveBarChartData().subscribe((data) => {
      this.barChart = data;

      for(let i=0;i<3;i++){
        this.arraysample.push(this.barChart.confirmed.value)
        this.arraysample1.push(this.barChart.recovered.value);
        this.arraysample2.push(this.barChart.deaths.value);
      }
      console.log(this.barChart.confirmed.value);

    })
  }
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{id: 'y-axis-10',position: 'left',}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = ['corana-cases'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [
    { data: this.arraysample ,label: 'Confirmed' },
    { data: this.arraysample1 ,label: 'Recovered' },
    { data: this.arraysample2 ,label: 'Deaths' },
  ];

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


}
