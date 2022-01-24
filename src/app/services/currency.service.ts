import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  currency = {
    sign: '$'
  }


  getCurrency() {
    return this.currency.sign;
  }

  getPrice(price: number): number {
    if (this.currency.sign === '$') {
      return Number((price * 4 / 3).toFixed(2));
    }
    else {
      return Number(price.toFixed(2));
    }
  }

  changeCurrency(newCurrency: string) {
    if (newCurrency != this.currency.sign) {
      if (this.currency.sign === '$') {
        this.currency.sign = '€'
      }
      else {
        this.currency.sign = '$'
      }
    }
  }

  constructor() { }
}
