import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { MenuService } from '../services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isMenuDataLoaded: boolean = false;
  menuData: any;

  eventsSubject: Subject<void> = new Subject<void>();

  emitEventToChild() {
    this.eventsSubject.next();
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

  updated(event) {
  }


  ngOnInit(): void {
    this.menuService.getMenuProducts().subscribe(data => {
      this.menuData = data;
      this.isMenuDataLoaded = true;
    });
  }

}



