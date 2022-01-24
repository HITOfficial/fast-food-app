import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';
import { SelectedProductsService } from '../services/selected-products.service';

@Component({
  selector: 'app-shopping-bin',
  templateUrl: './shopping-bin.component.html',
  styleUrls: ['./shopping-bin.component.css']
})
export class ShoppingBinComponent implements OnInit {

  constructor(public selectedProductsService: SelectedProductsService, public currencyService: CurrencyService) { }

  ngOnInit(): void {
  }


  totalPrice(): number {
    let price: number = 0;
    for (let p of this.selectedProductsService.shoppingBin) {

      price += (this.currencyService.getPrice(p.product.price) * p.quantity);
    }
    return Number(price.toFixed(2));
  }

  remove() {

  }
}
