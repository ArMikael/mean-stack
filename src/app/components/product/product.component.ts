import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.productId = params.id;
      console.log('Current product: ', this.productId);
    });

    this.productPrice = new FormControl(0, [Validators.required, Validators.maxLength(10)]);
    this.productDescription = new FormControl('No description was added yet.',
      [validateMinLength, Validators.maxLength(255)]);

    this.productPrice.valueChanges.subscribe(value => {
      console.log(value);
    });

    this.productDescription.statusChanges.subscribe(status => {
      console.log(status);
    });
  }

  ngAfterViewInit(): void {
    this.productTitle.nativeElement.value = this.productId;
  }
}

function validateMinLength(formControl: FormControl) {
  if (formControl.value.length < 3) {
    return { validateMinLength: { message: 'Should be minimum 3 characters' } };
  }

  return null;
}
