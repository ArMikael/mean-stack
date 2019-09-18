import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, scan, take } from 'rxjs/operators';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  requestsNumber: FormControl;
  streamResults: any;

  ngOnInit() {
    this.requestsNumber = new FormControl(2);

    this.requestsNumber.valueChanges
      .pipe(
        take(10), // How many values take from the stream
        filter(value => value < 10000),
        // map(value => value * 2),
        scan((acc, value) => acc.concat(value), []) // Concatenate all elements in the end
      )
      .subscribe((value) => {
        this.streamResults = value;
        console.log(value);
      }
    );
  }

}
