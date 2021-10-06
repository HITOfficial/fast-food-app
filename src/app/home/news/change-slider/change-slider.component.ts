import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-change-slider',
  templateUrl: './change-slider.component.html',
  styleUrls: ['./change-slider.component.css']
})
export class ChangeSliderComponent implements OnInit {
  @Output() changingDirection = new EventEmitter<string>();
  @Input() direction: string;

  constructor() { }

  ngOnInit(): void {
  }
  // emiting changing direction
  onSliderChange() {
    this.changingDirection.emit(this.direction);
  }

}
