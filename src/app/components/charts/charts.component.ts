import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import ChartService from '../../services/charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  options: any[];
  data: any[];

  constructor(private chartService: ChartService) { }

  ngOnInit() {
    Highcharts.chart('container', this.options);

    this.chartService.getChartData().subsribe(data => this.data = data;)
  }

}
