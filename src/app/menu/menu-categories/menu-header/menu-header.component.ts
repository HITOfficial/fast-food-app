import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.css']
})
export class MenuHeaderComponent implements OnInit {
  @Input() categories: any;
  @Input() activeCategories: unknown;

  constructor() { }

  ngOnInit(): void {
  }

  toggleCategory(category: any) {
    this.activeCategories[category] = !this.activeCategories[category];
  }

  resetCategories() {
    Object.keys(this.activeCategories).forEach(key => {
      this.activeCategories[key] = true;
    })
  }

}
