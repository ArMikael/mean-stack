import {Component, OnInit} from '@angular/core';
import {DataStoreService} from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mean-stack';
  currentStatus: string;

  constructor(private dataStore: DataStoreService) {}

  ngOnInit() {
    this.dataStore.getStatus().subscribe(newStatus => this.currentStatus = newStatus);
  }
}
