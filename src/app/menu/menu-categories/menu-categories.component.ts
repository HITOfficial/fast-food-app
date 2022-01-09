import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-categories',
  templateUrl: './menu-categories.component.html',
  styleUrls: ['./menu-categories.component.css']
})
export class MenuCategoriesComponent implements OnInit {
  @Input() categories: unknown;
  @Input() activeCategories: unknown;
  @Output() updatedCategory: EventEmitter<undefined> = new EventEmitter();


  updated(event) {
    this.updatedCategory.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
