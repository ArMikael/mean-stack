import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit, AfterViewInit {
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
   this.options = {title: {
       text: 'Solar Employment Growth by Sector, 2010-2016'
     },

     subtitle: {
       text: 'Source: thesolarfoundation.com'
     },

     chart: {
      type: 'pie'
     },

     yAxis: {
       title: {
         text: 'Number of Employees'
       }
     },

     legend: {
       layout: 'vertical',
       align: 'right',
       verticalAlign: 'middle'
     },

     plotOptions: {
       series: {
         label: {
           connectorAllowed: false
         },
         pointStart: 2010
       }
     },

     series: [{
       name: 'Installation',
       data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
     }, {
       name: 'Manufacturing',
       data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
     }, {
       name: 'Sales & Distribution',
       data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
     }, {
       name: 'Project Development',
       data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
     }, {
       name: 'Other',
       data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
     }],

     responsive: {
       rules: [{
         condition: {
           maxWidth: 500
         },
         chartOptions: {
           legend: {
             layout: 'horizontal',
             align: 'center',
             verticalAlign: 'bottom'
           }
         }
       }]
     }
    };

    Highcharts.chart('container', this.options);
  }

  ngAfterViewInit() {

  }

}
