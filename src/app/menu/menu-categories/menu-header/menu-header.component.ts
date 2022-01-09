import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() categories: any;
  @Input() activeCategories: any;
  // emit data to update categories
  @Output() updatedCategory: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleCategory(category: any) {
    this.activeCategories[category] = !this.activeCategories[category];
    this.update();
  }

  resetCategories() {
    Object.keys(this.activeCategories).forEach(key => {
      this.activeCategories[key] = true;
    });
    this.update();
  }

  update() {
    this.updatedCategory.emit(true);

  }
}
