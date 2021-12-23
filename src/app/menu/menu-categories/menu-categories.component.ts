import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  @Input() categories: unknown;
  @Input() activeCategories: unknown;


  constructor() { }

  ngOnInit(): void {
  }

}
