import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx-angular';

@Injectable()
export class MobXStore {
  @observable status = '';
  @observable type = '';

  @computed
  get fullStatus() {
    return `type - ${this.type} with status - ${this.status}`;
  }

  @action
  setStatus(newStatus) {
    this.status = newStatus;
  }

  @action
  setType(newType) {
    this.type = newType;
  }
}
