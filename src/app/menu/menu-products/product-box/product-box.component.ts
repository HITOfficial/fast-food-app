import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  active: boolean = false;
  @Input() product: { productId: number, productImage: string, productCategory: string, description: string, ingredients: string, calories: number, quantity: number, price: number };
  @Input() maxPrice: number;
  @Input() minPrice: number;
  @Input() products: any;
  @Input() index: number;
  remaining: number;
  constructor() {
  }

  ngOnInit(): void {
    this.remaining = this.product.quantity + 0;
  }

  addEvent() {
    if (this.remaining > 0) {
      this.remaining -= 1;
    }
  }

  reduceEvent() {
    if (this.remaining < this.product.quantity) {
      this.remaining += 1;
    }
  }
  resetEvent() {
    this.remaining = this.product.quantity + 0;
  }

  remove() {
    this.products.splice(this.index, 1);
  }

}
