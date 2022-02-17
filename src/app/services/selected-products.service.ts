import { Injectable } from '@angular/core';
import { IMenuProduct } from '../models/menu-product';
import { IShoppingBinProduct } from '../models/shopping-bin-product';
import { AuthService } from './auth.service';
import { MenuService } from './menu.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class SelectedProductsService {

  shoppingBin: IShoppingBinProduct[] = new Array();

  constructor(private menuService: MenuService, private usersService: UsersService, private authService: AuthService) {
  }

  addToShoppingBin(prod: IMenuProduct, q: number) {
    const index = this.shoppingBin.findIndex(p => p.product.productId === prod.productId);
    if (index != -1) {
      this.shoppingBin[index].quantity += q;
    }
    // new product to shopping bin
    else {
      this.shoppingBin.push({ product: prod, quantity: q });
    }
  }

  reduceFromShoppingBin(prod: IMenuProduct, q: number) {
    const index = this.shoppingBin.findIndex(p => p.product.productId === prod.productId);
    if (index != -1) {
      if (this.shoppingBin[index].quantity - q <= 0) {
        this.shoppingBin.splice(index, 1);
      }
      else {
        this.shoppingBin[index].quantity -= q;
      }
    }
  }

  removeFromShoppingBin(prod: IMenuProduct) {
    const index = this.shoppingBin.findIndex(p => p.product.productId === prod.productId);
    if (index != -1) {
      this.shoppingBin.splice(index, 1);
    }
  }

  buyNow() {
    for (let shoppingBinProduct of this.shoppingBin) {
      console.log(shoppingBinProduct);
      if (shoppingBinProduct.quantity > 0) {
        // updating quantity in DB
        this.menuService.updateProductQuantity(shoppingBinProduct.product, shoppingBinProduct.product.quantity - shoppingBinProduct.quantity);
        this.usersService.updateBoughtProductsList(this.authService.getLoggedUserUid(), shoppingBinProduct.product.productId.toString());
      }
    }
    this.removeAllFromShoppingBin();
  }

  getProductsQuantity() {
    let counter = 0;
    for (let p of this.shoppingBin) {
      counter += p.quantity;
    }
    return counter;
  }

  getRemainingProductQuantity(prod: IMenuProduct): number {
    const index = this.shoppingBin.findIndex(p => p.product.productId === prod.productId);
    // checking if is element taken
    if (index != -1) {
      return prod.quantity - this.shoppingBin[index].quantity;
    }
    else {
      return prod.quantity
    }
  }

  removeAllFromShoppingBin() {
    this.shoppingBin = new Array();
  }
}