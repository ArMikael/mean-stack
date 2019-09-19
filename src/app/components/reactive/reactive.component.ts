import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, map, scan, take } from 'rxjs/operators';
import { of, from } from 'rxjs';
import {fromEvent} from 'rxjs/internal/observable/fromEvent';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }
  requestsNumber: FormControl;
  streamResults: any;
  stream$;
  arrayStream$;

  ngOnInit() {
    this.requestsNumber = new FormControl(2);

    // Of
    this.stream$ = of('JavaScript', 'Angular', 'ReactJS', 'Vue');
    this.stream$.subscribe(val => console.log('of: ', val));

    // From - Array
    this.arrayStream$ = from(['Front-End', 'Back-End', 'QA'])
      .pipe(
        scan((acc, val) => acc.concat(val), <any>[])
      );
    this.arrayStream$.subscribe(val => console.log('from: ', val));


    // fromEvent
    fromEvent(<HTMLCanvasElement>document.getElementById('canvasField'), 'mousemove')
      .pipe(
        map((e:MouseEvent|any) => ({
          x: e.offsetX,
          y: e.offsetY,
          ctx: e.target.getContext('2d')
        }))
      )
      .subscribe(
        (position => {
          position.ctx.fillRect(position.x, position.y, 2, 2);
        })
      );

    const clear$ = fromEvent(document.getElementById('clearCanvas'), 'click');

    clear$.subscribe(() => {
      const canvas = <HTMLCanvasElement>document.getElementById('canvasField');
      canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    });



    // Operators
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
      }, null, () => console.log('Complete. Stream closed.')
    );
  }

}
