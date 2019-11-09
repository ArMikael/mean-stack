import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {action, computed, observable} from 'mobx-angular';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-mobx',
  templateUrl: './mobx.component.html',
  styleUrls: ['./mobx.component.css']
})
export class MobxComponent implements OnInit {

  constructor() { }

  @observable status: string;
  @observable type: string;


  ngOnInit() {
  }

  @action setStatus(status) {
    this.status = status;
  }

  @action setType(type) {
    this.type = type;
  }

  @computed get fullStatus() {
    return `Type: ${this.type} ' with status: ${this.status}`;
  }

}
