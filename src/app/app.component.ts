import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DataStoreService } from './services/data-store.service';
import { MobXStore } from './app.mobx-store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mean-stack';
  currentStatus: string;
  fullStatus: string;

  constructor(
    private dataStore: DataStoreService,
    public store: MobXStore
  ) {}

  ngOnInit() {
    this.dataStore.getStatus().subscribe(newStatus => this.currentStatus = newStatus);
    // this.fullStatus = this.store.fullStatus;
  }
}
