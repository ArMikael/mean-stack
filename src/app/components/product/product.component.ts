import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, AfterViewInit {

  constructor(private router: ActivatedRoute) { }

  productId: number;
  @ViewChild('productTitle') productTitle: ElementRef;

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.productId = params.id;
      console.log('Current product: ', this.productId);
    });
  }

  ngAfterViewInit(): void {
    this.productTitle.nativeElement.value = this.productId;
  }
}
