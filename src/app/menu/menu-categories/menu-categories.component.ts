import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  @Input() menuData: unknown;
  @Input() activeCategories: unknown;


  toggleCategory(category: string) {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
