import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { AuthService } from 'src/app/services/auth.service';
import { CurrencyService } from 'src/app/services/currency.service';
import { MenuService } from 'src/app/services/menu.service';
import { SelectedProductsService } from 'src/app/services/selected-products.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public menuService: MenuService, public currencyService: CurrencyService, public selectedProductsService: SelectedProductsService, public authService: AuthService) {
    this.product = this.router.getCurrentNavigation().extras.state.product;
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

  remove() {
    this.selectedProductsService.removeFromShoppingBin(this.product);
    this.menuService.deleteProduct(this.product);
    this.goToMenu();
  }

  goToMenu() {
    this.router.navigate(["../"], { relativeTo: this.activatedRoute });
  }

}
