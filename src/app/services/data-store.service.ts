import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  private _status = new BehaviorSubject(null);

  getStatus() {
    return this._status.asObservable();
  }

  setStatus(newStatus) {
    this._status.next(newStatus);
  }
}
