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
    });
  }

  addProduct(product: IMenuProduct) {
    this.menuProductsDb.push(product);
  }

  deleteProduct(product: any) {
    const idx = this.menuProducts.indexOf(product)
    this.menuProducts.splice(idx, 1);
    // this.menuProductsDb.remove(product);
  }

  getMenuProducts(): Observable<IMenuProduct>[] {
    return this.menuProducts;
  }
}
