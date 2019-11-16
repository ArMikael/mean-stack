import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { MobXStore } from '../../app.mobx-store';

@Component({
  selector: 'app-mobx',
  templateUrl: './mobx.component.html',
  styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit, OnChanges {

  constructor(public store: MobXStore) { }
  status;
  type;
  fullStatus: string;
  incidentType: string;
  incidentTitle: string;
  incidentList: any[];

  ngOnInit() {
    this.fullStatus = this.store.fullStatus;
  }

  // ngOnChanges() {
  //   this.incidentList = this.store.state.incidentList;
  // }

  setStatus(status) {
    this.store.setStatus(status);
  }

  setType(type) {
    this.store.setType(type);
  }

  addIncident() {
    const incident = { title: this.incidentTitle, type: this.incidentType };
    this.store.addIncident(incident);
  }
}
