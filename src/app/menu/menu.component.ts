import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData: unknown = {
    news: [
      { productId: 1, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179, quantity: 8, price: 15.55 },
      { productId: 2, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179, quantity: 16, price: 6.70 },
      { productId: 3, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179, quantity: 5, price: 43.13 },
      { productId: 4, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179, quantity: 9, price: 1.78 },
      { productId: 5, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179, quantity: 5, price: 3.33 },
    ],
    burgers: [
      { productId: 6, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179, quantity: 1, price: 11.70 },
      { productId: 7, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179, quantity: 7, price: 11.30 },
      { productId: 8, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179, quantity: 11, price: 11.70 },
      { productId: 9, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179, quantity: 14, price: 11.70 },
      { productId: 10, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179, quantity: 5, price: 11.70 },
    ],
    chicken: [
      { productId: 11, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179, quantity: 6, price: 11.70 },
      { productId: 12, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179, quantity: 8, price: 86.70 },
      { productId: 13, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 14, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179, quantity: 2, price: 11.70 },
      { productId: 15, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179, quantity: 11, price: 2.70 },
    ],
    vege: [
      { productId: 16, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 17, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 18, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179, quantity: 8, price: 11.70 },
      { productId: 19, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179, quantity: 7, price: 41.70 },
      { productId: 20, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179, quantity: 17, price: 11.70 },
    ],
    sets: [
      { productId: 21, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 22, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179, quantity: 7, price: 11.32 },
      { productId: 23, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 24, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179, quantity: 14, price: 11.70 },
      { productId: 25, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
    ],
    drinks: [
      { productId: 26, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 21.78 },
      { productId: 27, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179, quantity: 13, price: 11.70 },
      { productId: 28, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
      { productId: 29, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179, quantity: 5, price: 81.30 },
      { productId: 30, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.70 },
    ],
    additives: [
      { productId: 31, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 11.30 },
      { productId: 32, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179, quantity: 15, price: 11.70 },
      { productId: 33, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 51.70 },
      { productId: 34, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179, quantity: 4, price: 2.70 },
      { productId: 35, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179, quantity: 7, price: 11.70 },
    ],
  }

  activeCategories = {
    news: true,
    burgers: true,
    chicken: true,
    vege: true,
    sets: true,
    drinks: true,
    additives: true
  }

  constructor() {

  }

  ngOnInit(): void {
  }


}
