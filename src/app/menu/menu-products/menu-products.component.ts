import { Component, Input, OnInit, KeyValueChanges, KeyValueDiffer, KeyValueDiffers } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-products',
  templateUrl: './menu-products.component.html',
  styleUrls: ['./menu-products.component.css']
})
export class MenuProductsComponent implements OnInit {
  @Input("menuData") products: any;
  @Input() activeCategories: any;
  @Input() menuService: MenuService;

  minPrice: number;
  maxPrice: number;
  minPriceCondition: number = (-1) * Infinity;
  maxPriceCondition: number = Infinity;

  constructor() {

  }

  sortObjectsListByPriceDESC() {
    this.products.sort((a, b) => {
      if (a.price >= b.price) {
        return -1;
      }
      else {
        return 1;
      }
    })
  }

  // element with the highest price in selected categories
  minMaxPrice() {
    // reset previous value

    let minPrice = Infinity;
    let maxPrice = (-1) * Infinity;
    for (let e of this.products) {
      if ((this.activeCategories[e.productCategory] === true) && (e.price >= this.minPriceCondition && e.price <= this.maxPriceCondition)) {
        maxPrice = Math.max(e.price, maxPrice);
        minPrice = Math.min(e.price, minPrice);
      }
    }
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }

  ngOnChanges() {
    console.log("changes");
    this.minMaxPrice();

  }

  ngOnInit(): void {
    this.sortObjectsListByPriceDESC();
    this.categoriesUpdate();
  }

  categoriesUpdate(): void {
    const categoriesDOM = document.querySelector('.categories');
    categoriesDOM.addEventListener('click', this.minMaxPrice.bind(this));
  }

  priceFilter(): void {
    console.log(this.minPrice, this.maxPrice);
    const newMinPrice = (<HTMLInputElement>document.querySelector('.min-price-btn')).value;
    const newMaxPrice = (<HTMLInputElement>document.querySelector('.max-price-btn')).value;
    this.minPriceCondition = Number(newMinPrice);
    this.maxPriceCondition = Number(newMaxPrice);
    this.categoriesUpdate();
  }


  checkIfPriceBetween(price: number): boolean {
    return price >= this.minPriceCondition && price <= this.maxPriceCondition;
  }
}
