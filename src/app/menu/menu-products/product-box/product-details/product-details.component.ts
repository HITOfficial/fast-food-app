import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMenuProduct } from 'src/app/models/menu-product';
import { IMenuProductOpinion } from 'src/app/models/menu-product-opinion';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: IMenuProduct;
  remaining: number;
  menuService: any;

  ngOnInit(): void {
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    console.log(this.router.getCurrentNavigation().extras.state.menuService);
    this.product = this.router.getCurrentNavigation().extras.state.product
    this.remaining = this.router.getCurrentNavigation().extras.state.remaining;
    // this.menuService = this.router.getCurrentNavigation().extras.state.menuService;
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
