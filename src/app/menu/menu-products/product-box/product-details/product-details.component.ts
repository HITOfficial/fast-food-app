import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IMenuProduct;
  remaining: number;

  ngOnInit(): void {
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute, public menuService: MenuService) {
    this.product = this.router.getCurrentNavigation().extras.state.product
    this.remaining = this.router.getCurrentNavigation().extras.state.remaining;
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
