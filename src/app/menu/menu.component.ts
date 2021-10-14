import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuData: unknown = {
    news: [
      { productId: 1, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 2, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 3, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 4, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 5, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "news", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    burgers: [
      { productId: 6, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 7, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 8, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 9, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 10, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "burgers", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    chicken: [
      { productId: 11, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 12, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 13, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 14, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 15, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "chicken", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    vege: [
      { productId: 16, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 17, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 18, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 19, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 20, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "vege", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    sets: [
      { productId: 21, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 22, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 23, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 24, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 25, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "sets", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    drinks: [
      { productId: 26, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 27, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 28, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 29, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 30, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "drinks", description: "Description data", ingredients: "tomato", calories: 179 },
    ],
    additives: [
      { productId: 31, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 32, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 33, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 34, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179 },
      { productId: 35, productImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", productCategory: "additives", description: "Description data", ingredients: "tomato", calories: 179 },
    ]
  }

  constructor() {

  }

  ngOnInit(): void {
  }


}
