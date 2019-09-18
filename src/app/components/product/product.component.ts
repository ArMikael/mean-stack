import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  constructor(private router: ActivatedRoute) { }

  productId: number;
  @ViewChild('productTitle') productTitle: ElementRef;
  productPrice: FormControl;
  productDescription: FormControl;
  productQuantity: FormControl;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.productId = params.id;
      console.log('Current product: ', this.productId);
    });

    this.productPrice = new FormControl(0, [Validators.required, Validators.maxLength(10)]);
    this.productDescription = new FormControl('No description was added yet.',
      [validateMinLength], validateAsyncMaxLength);
    this.productQuantity = new FormControl(1, validateLengthDynamically(1, 4));


    this.productPrice.valueChanges
      .subscribe(value => {
      console.log(value);
    });

    this.productDescription.statusChanges.subscribe(status => {
      console.log(status, this.productDescription.errors);
    });

    this.productQuantity.statusChanges.subscribe(status => {
      console.log(status, this.productQuantity.errors);
    });
  }

  ngAfterViewInit(): void {
    this.productTitle.nativeElement.value = this.productId;
  }
}

// Custom validator
function validateMinLength(formControl: FormControl) {
  if (formControl.value.length < 3) {
    return { validateMinLength: { message: 'Should be minimum 3 characters' } };
  }

  return null;
}

// Custom validator with dynamic parameters
function validateLengthDynamically(min, max) {
  return function (formControl: FormControl) {
    if (formControl.value.length < min) {
      return { validateMinLengthDynamically: { message: 'Should be minimum ' + min + ' characters' } };
    } else if (formControl.value.length > max) {
      return { validateMaxLengthDynamically: { message: 'Should be maximum ' + max + ' characters' } };
    }

    return null;
  };
}

// Custom async validator
function validateAsyncMaxLength(formControl: FormControl):Observable<null|any> {
  if (formControl.value.length > 60) {
    // Angular 6 issue: Observable.of can't be used in this version
    return of({ validateAsyncMaxLength: { message: 'Should be maximum 60 characters' } });
  }

  return of(null);
}
