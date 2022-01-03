import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { Observable } from 'rxjs';
import { IMenuProduct } from '../models/menu-product';


@Injectable()
export class MenuService {
  private menuProductsDb: AngularFireList<any>;
  menuProducts: Observable<IMenuProduct>[];
  constructor(private db: AngularFireDatabase) {
    this.menuProductsDb = db.list('menu');
    this.menuProductsDb.valueChanges().subscribe(x => {
      this.menuProducts = x;
      console.log(this.menuProducts);
    });
  }

  addProduct(product: IMenuProduct) {
    this.menuProductsDb.push(product);
  }

  getMenuProducts(): Observable<IMenuProduct>[] {
    return this.menuProducts;
  }
}
