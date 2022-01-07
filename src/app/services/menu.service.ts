import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'
import { Observable } from 'rxjs';
import { IMenuProduct } from '../models/menu-product';
import { IMenuProductOpinion } from '../models/menu-product-opinion';


@Injectable()
export class MenuService {
  private menuProductsDb: AngularFireList<IMenuProduct>;
  menuProducts: IMenuProduct[];
  constructor(private db: AngularFireDatabase) {
    this.menuProductsDb = db.list('menu');
    this.menuProductsDb.valueChanges().subscribe(res => { this.menuProducts = res });
  }

  addProduct(product: IMenuProduct) {
    this.menuProductsDb.push(product);
  }

  deleteProduct(product: any) {
    // const idx = this.menuProducts.indexOf(product)
    // this.menuProducts.splice(idx, 1);
    // this.menuProductsDb.remove(product);
  }

  addOpinion(product: IMenuProduct, opinion: IMenuProductOpinion) {
    const index = this.menuProducts.indexOf(product);
    console.log(index);
    // product.opinions.push(opinion);
  }

  getMenuProducts(): any {
    return this.menuProducts;
  }
}
