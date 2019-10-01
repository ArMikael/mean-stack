import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NetService {

  constructor(private http: HttpClient) { }

  getChartDummyData() {
    return this.http.get('https://api.myjson.com/bins/13lnf4');
  }
}
