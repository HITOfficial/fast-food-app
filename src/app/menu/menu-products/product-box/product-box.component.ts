import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { MenuService } from 'src/app/services/menu.service';
import { SelectedProductsService } from 'src/app/services/selected-products.service';

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
  remaining: number;


  constructor(private router: Router, private activatedRoute: ActivatedRoute, public menuService: MenuService, public currencyService: CurrencyService, public selectedProductsService: SelectedProductsService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.remaining = this.product.quantity + 0;
  }

  addEvent() {
    this.selectedProductsService.addToShoppingBin(this.product, 1);
  }

  reduceEvent() {
    this.selectedProductsService.reduceFromShoppingBin(this.product, 1);
  }

  resetEvent() {
    this.remaining = this.product.quantity + 0;
    this.selectedProductsService.removeFromShoppingBin(this.product);
  }

  remove() {
    this.selectedProductsService.removeFromShoppingBin(this.product);
    this.menuService.deleteProduct(this.product);
  }

  goToProductDetalis() {
    this.router.navigate([this.product.productId], { relativeTo: this.activatedRoute, state: { product: this.product, remaining: this.remaining } })
  }

}
