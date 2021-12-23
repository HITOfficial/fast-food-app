import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-products',
  templateUrl: './menu-products.component.html',
  styleUrls: ['./menu-products.component.css']
})
export class MenuProductsComponent implements OnInit {
  @Input("menuData") Products: unknown
  @Input() activeCategories: unknown;

  constructor() { }

  ngOnInit(): void {
  }

}
