import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: { productId: number, productImage: string, productCategory: string, description: string, ingredients: string, calories: number, quantity: number, price: number };
  remaining: number;
  menuService: MenuService;

  ngOnInit(): void {
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.product = this.router.getCurrentNavigation().extras.state.product
    this.remaining = this.router.getCurrentNavigation().extras.state.remaining;
    this.menuService = this.router.getCurrentNavigation().extras.state.menuService;
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
