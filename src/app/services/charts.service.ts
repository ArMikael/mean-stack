import { Injectable } from '@angular/core';
import {NetService} from './net.service';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private net: NetService) { }

  getChartData(): Observable<any> {
    return this.net.getChartDummyData();
  }
}
