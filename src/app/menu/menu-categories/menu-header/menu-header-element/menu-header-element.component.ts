import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu-header-element',
  templateUrl: './menu-header-element.component.html',
  styleUrls: ['./menu-header-element.component.css']
})
export class MenuHeaderElementComponent implements OnInit {
  @Input() headerName: any;

  constructor() { }

  ngOnInit(): void {
  }

}
