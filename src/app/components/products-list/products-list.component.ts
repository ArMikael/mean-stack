import {Component, OnInit, AfterViewInit} from '@angular/core';
import {DataStoreService} from '../../services/data-store.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  currentStatus: string;

  constructor(private dataStore: DataStoreService) { }

  ngOnInit() {
    this.dataStore.getStatus().subscribe(status => this.currentStatus = status);
  }

  ngAfterViewInit() {

  }

  setNewStatus(status) {
    this.dataStore.setStatus(status);
  }
}
