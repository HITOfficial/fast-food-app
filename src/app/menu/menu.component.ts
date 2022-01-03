import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuDataLoaded: boolean = false;
  menuData: unknown


  activeCategories = {
    news: true,
    burgers: true,
    chicken: false,
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


  constructor(public menuService: MenuService) {
  }


  ngOnInit(): void {
    console.log(this.menuData);
    setTimeout(() => {
      this.isMenuDataLoaded = true;
      this.menuData = this.menuService.getMenuProducts();
    }, 200)
  }


}



