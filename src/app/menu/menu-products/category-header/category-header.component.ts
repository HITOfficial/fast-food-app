import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-header',
  templateUrl: './category-header.component.html',
  styleUrls: ['./category-header.component.css']
})
export class CategoryHeaderComponent implements OnInit {
  @Input() categoryName: any;
  constructor() { }

  ngOnInit(): void {
  }

}
