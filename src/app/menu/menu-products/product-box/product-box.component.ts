import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  active: boolean = false;
  @Input() product: { productId: number, productImage: string, productCategory: string, description: string, ingredients: string, calories: number };
  constructor() { }

  ngOnInit(): void {
  }

}
