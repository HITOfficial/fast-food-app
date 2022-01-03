import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';
import { MenuProduct } from '../models/menu-product';


@Injectable()
export class ItemService {
  private menuProductsCollection: AngularFirestoreCollection<MenuProduct>;
  menuProducts: Observable<MenuProduct[]>;
  constructor(private db: AngularFirestore) {
    this.menuProductsCollection = db.collection<MenuProduct>('menu');
    this.menuProducts = this.menuProductsCollection.valueChanges();
  }

  addProduct(product: MenuProduct) {
    this.menuProductsCollection.add(product);
  }

  getMenuProducts() {
    return this.menuProducts;
  }
}
