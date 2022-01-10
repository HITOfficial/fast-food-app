import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { CurrencyService } from 'src/app/services/currency.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IMenuProduct;
  remaining: number;
  productPage: { page: number } = { page: 0 };
  isMenuDataLoaded: boolean = false;
  menuData: IMenuProduct[];


  ngOnInit(): void {
    this.menuService.getMenuProducts().subscribe(data => {
      this.menuData = data;
      this.isMenuDataLoaded = true;
    });
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public menuService: MenuService, public currencyService: CurrencyService) {
    this.product = this.router.getCurrentNavigation().extras.state.product;
    this.remaining = this.router.getCurrentNavigation().extras.state.remaining;
  }


  nextImage() {
    this.productPage.page = (this.productPage.page + 1) % this.product.productImages.length;
  }

  previousImage() {
    if (this.productPage.page === 0) {
      this.productPage.page = this.product.productImages.length - 1;
    }
    else {
      this.productPage.page -= 1;
    }
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
    this.goToMenu();
  }

  goToMenu() {
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }

}
