import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MobXStore } from '../../app.mobx-store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mobx',
  templateUrl: './mobx.component.html',
  styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit {

  constructor(private store: MobXStore) { }
  status;
  type;
  fullStatus: string;

  ngOnInit() {
    this.fullStatus = this.store.fullStatus;
  }

  setStatus(status) {
    this.store.setStatus(status);
  }

  setType(type) {
    this.store.setType(type);
  }
}
