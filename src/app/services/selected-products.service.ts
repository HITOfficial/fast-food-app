import { Injectable } from '@angular/core';
import { IShoppingBinProduct } from '../models/shopping-bin-product';
import { MenuService } from './menu.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductsService {

  shoppingBin: IShoppingBinProduct[] = new Array();

  constructor(private menuService: MenuService, private usersService: UsersService) {

  }

  updateShoppingBin(key, quantity) {
    if (this.shoppingBin.find(key) != undefined) {
      const index = this.shoppingBin.findIndex(product => product.key === key);
      this.shoppingBin[index].quantity = quantity;
    }
    // new product to shopping bin
    else {
      this.shoppingBin.push({ key: key, quantity: quantity })
    }
  }

  removeFromShoppingBin(key) {
    if (this.shoppingBin.find(key) != undefined) {
      const index = this.shoppingBin.findIndex(product => product.key === key);
      this.shoppingBin.splice(index, 1);
    }
  }

  buyNow() {
    for (let shoppingBinProduct of this.shoppingBin) {
      if (shoppingBinProduct.quantity > 0) {
        this.usersService.getUser
        this.menuService.updateProductQuantity(shoppingBinProduct)
      }
    }
  }
}
