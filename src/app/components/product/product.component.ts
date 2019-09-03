import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

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

    this.productPrice = new FormControl(0);
    this.productDescription = new FormControl('No description was added yet.');
  }

  ngAfterViewInit(): void {
    this.productTitle.nativeElement.value = this.productId;
  }
}
