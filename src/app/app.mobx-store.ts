import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx-angular';

@Injectable()
export class MobXStore {
  @observable state: any = {
    status: '',
    type: '',
    incidentList: []
  };

  @computed
  get fullStatus() {
    return `type - ${this.state.type} with status - ${this.state.status}`;
  }

  @action
  setStatus(newStatus) {
    this.state.status = newStatus;
  }

  @action
  setType(newType) {
    this.state.type = newType;
  }

  @action
  addIncident(newIncident) {
    this.state.incidentList.push(newIncident);
  }
}
