import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }
  activeCategories = {
    news: true,
    burgers: true,
    chicken: true,
    vege: true,
    sets: true,
    drinks: true,
    additives: true
  }

  categories = {
    news: "news",
    burgers: "burgers",
    chicken: "chicken",
    vege: "vege",
    sets: "sets",
    drinks: "drinks",
    additives: "additives"
  }
}
