import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IMenuProduct } from 'src/app/models/menu-product';
import { IPagination } from 'src/app/models/pagination';
import { CurrencyService } from 'src/app/services/currency.service';
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

  @Input() events: Observable<void>;
  private eventsSubscription: Subscription;

  minPrice: number;
  maxPrice: number;
  minPriceCondition: number = (-1) * Infinity;
  maxPriceCondition: number = Infinity;

  pagination: IPagination = {
    actualPage: 1,
    totalPages: undefined,
    displayedProducts: 0,
    productsPerPage: 5,
    productsToSkip: 0,
    totalPagesArray: undefined
  };


  constructor(private currencyService: CurrencyService) {
  }

  sortObjectsListByPriceDESC() {
    this.products.sort((a, b) => {
      if (this.currencyService.getPrice(a.price) >= this.currencyService.getPrice(b.price)) {
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
      if ((this.activeCategories[e.productCategory] === true) && (this.currencyService.getPrice(e.price) >= this.minPriceCondition && this.currencyService.getPrice(e.price) <= this.maxPriceCondition)) {
        maxPrice = Math.max(this.currencyService.getPrice(e.price), maxPrice);
        minPrice = Math.min(this.currencyService.getPrice(e.price), minPrice);
      }
    }
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
  }

  categoriesUpdate(): void {
    const categoriesDOM = document.querySelector('.categories');
    categoriesDOM.addEventListener('click', this.minMaxPrice.bind(this));
    this.paginationEvent();
  }

  priceFilter(): void {
    const newMinPrice = (<HTMLInputElement>document.querySelector('.min-price-btn')).value;
    const newMaxPrice = (<HTMLInputElement>document.querySelector('.max-price-btn')).value;
    this.minPriceCondition = Number(newMinPrice);
    this.maxPriceCondition = Number(newMaxPrice);
    this.categoriesUpdate();
  }

  checkIfPriceBetween(price: number): boolean {
    return this.currencyService.getPrice(price) >= this.minPriceCondition && this.currencyService.getPrice(price) <= this.maxPriceCondition;
  }

  calculateTotalPages() {
    let counter = 0;
    for (let product of this.products) {
      if (this.activeCategories[product.productCategory] && this.checkIfPriceBetween(product.price)) {
        counter += 1;
      }
    }
    this.pagination.totalPages = Math.ceil(counter / this.pagination.productsPerPage);
    this.pagination.totalPagesArray = new Array();
    for (let i = 0; i < this.pagination.totalPages; i++) {
      this.pagination.totalPagesArray.push(i + 1);
    }
  }

  nextPage() {
    this.pagination.actualPage = (this.pagination.actualPage % this.pagination.totalPages) + 1;
    this.paginationEvent();
  }

  previousPage() {
    if (this.pagination.actualPage === 1) {
      // removing reference
      this.pagination.actualPage = this.pagination.totalPages + 0;
    }
    else {
      this.pagination.actualPage -= 1;
    }
    this.paginationEvent();
  }

  goToPage(pageNumber) {
    this.pagination.actualPage = pageNumber;
    this.paginationEvent();
  }

  resetDisplayedProducts() {
    this.pagination.displayedProducts = 0;
  }

  calculateProductsToSkip() {
    this.pagination.productsToSkip = (this.pagination.actualPage - 1) * this.pagination.productsPerPage;
  }

  showProduct(product: IMenuProduct): boolean {
    // showed all products on actual page
    if (this.pagination.displayedProducts > this.pagination.productsPerPage) {
      return false;
    }
    else if (this.pagination.productsToSkip > 0) {
      this.pagination.productsToSkip -= 1;
      return false;
    }
    else {
      this.pagination.displayedProducts += 1;
      return true;
    }
  }

  paginationEvent() {
    this.resetDisplayedProducts();
    this.calculateTotalPages();
    this.calculateProductsToSkip();

  }

  ngOnChanges() {
    this.minMaxPrice();
    this.paginationEvent()

  }

  loadProducts: boolean = false;

  ngOnInit(): void {
    this.loadProducts = false;
    this.sortObjectsListByPriceDESC();
    this.categoriesUpdate();
    setTimeout(() => this.loadProducts = true, 50);
    this.eventsSubscription = this.events.subscribe(() => this.paginationEvent());
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

}
