import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-block',
  templateUrl: './menu-block.component.html',
  styleUrls: ['./menu-block.component.css']
})
export class MenuBlockComponent implements OnInit {
  menuData: any = {
    news: [
      { food_id: 1, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "news", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 2, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "news", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 3, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "news", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 4, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "news", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 5, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "news", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    burgers: [
      { food_id: 6, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "burgers", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 7, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "burgers", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 8, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "burgers", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 9, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "burgers", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 10, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "burgers", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    chicken: [
      { food_id: 11, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "chicken", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 12, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "chicken", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 13, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "chicken", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 14, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "chicken", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 15, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "chicken", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    vege: [
      { food_id: 16, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "vege", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 17, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "vege", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 18, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "vege", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 19, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "vege", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 20, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "vege", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    sets: [
      { food_id: 21, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "sets", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 22, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "sets", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 23, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "sets", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 24, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "sets", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 25, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "sets", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    drinks: [
      { food_id: 26, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "drinks", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 27, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "drinks", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 28, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "drinks", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 29, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "drinks", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 30, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "drinks", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ],
    additives: [
      { food_id: 31, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "additives", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 32, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "additives", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 33, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "additives", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 34, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "additives", description: "Description data", ingrediens: "tomato", kcal: "179" },
      { food_id: 35, foodImage: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Homemade_burger.jpg", foodType: "additives", description: "Description data", ingrediens: "tomato", kcal: "179" },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
