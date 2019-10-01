import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  public options: any;
  data = [2, 3, 7, 9, 17];

  constructor(private chartsService: ChartsService) { }

  ngOnInit() {
    this.setChartData();
  }

  getChartData() {
    this.chartsService.getChartData().subscribe(data => {
      this.data = data;
      this.setChartData();
    });
  }

  setChartData() {
   this.options = {
      chart: {
        type: 'line',
        height: 400
      },
      title: {
        text: 'Sample Line'
      },
      series: this.data
    };

    Highcharts.chart('container', this.options);
  }


}
