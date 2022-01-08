import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { Observable } from 'rxjs';
import { IMenuProduct } from '../models/menu-product';
import { IMenuProductOpinion } from '../models/menu-product-opinion';


@Injectable()
export class MenuService {
  private menuProductsRef: AngularFireList<IMenuProduct>;
  menuProducts: Observable<IMenuProduct[]>;
  constructor(private db: AngularFireDatabase) {
    this.menuProductsRef = db.list('menu');
    this.menuProducts = this.menuProductsRef.valueChanges();
  }

  addProduct(product: IMenuProduct) {
    const newProduct = this.menuProductsRef.push(product);
    const key = newProduct.key;
    console.log(key);
    // key as a value in interface to not use snapshotchanges, but only valuechanges
    this.db.list('menu').update(key, { productId: key })
  }

  deleteProduct(product: IMenuProduct) {
    this.db.list('menu').remove(product.productId.toString());
  }

  addOpinion(product: IMenuProduct, opinion: IMenuProductOpinion) {
    // const index = this.menuProducts.indexOf(product);
    // console.log(index);
    // product.opinions.push(opinion);
  }

  getMenuProducts(): Observable<IMenuProduct[]> {
    return this.menuProducts;
  }
}
