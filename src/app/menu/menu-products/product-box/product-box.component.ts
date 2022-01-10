import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { CurrencyService } from 'src/app/services/currency.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  active: boolean = false;
  @Input() product: IMenuProduct;
  @Input() maxPrice: number;
  @Input() minPrice: number;
  @Input() products: any;
  @Input() index: number;
  @Input() menuService: MenuService;
  remaining: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, public currencyService: CurrencyService) {
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
    this.menuService.deleteProduct(this.product);
  }

  goToProductDetalis() {
    this.router.navigate([this.product.productId], { relativeTo: this.activatedRoute, state: { product: this.product, remaining: this.remaining } })
  }

}
