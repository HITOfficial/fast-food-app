import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { MenuService } from '../services/menu.service';
import { IMenuProduct } from '../models/menu-product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(public authService: AuthService, public menuService: MenuService) { }

  ngOnInit(): void {
  }

  addProduct(desc: string, ing: string, p: string, prodCategory: string, prodImage: string, cal: string, q: string) {
    const addProductContainer = document.querySelector<HTMLInputElement>(".add-product-container");
    if (desc == '' || ing == '' || p == '' || prodCategory == '' || prodImage == '' || cal == '' || q == '') {
      addProductContainer.classList.add('fail')
      setTimeout(() => this.removeFail(addProductContainer), 1000)
    }
    else {
      const newProduct: IMenuProduct = {
        productId: '0',
        description: desc,
        ingredients: ing,
        price: Number(p),
        productCategory: prodCategory,
        productImage: prodImage,
        productImages: [
          prodImage
        ],
        calories: Number(cal),
        quantity: Number(q)
      }
      addProductContainer.classList.add('success')
      setTimeout(() => this.removeSuccess(addProductContainer), 1000)
      this.menuService.addProduct(newProduct);
    }
  }

  removeFail(element) {
    if (element.classList.contains("fail")) {
      element.classList.remove("fail")
    }
  }

  removeSuccess(element) {
    if (element.classList.contains("success")) {
      element.classList.remove("success")
    }
  }

}
