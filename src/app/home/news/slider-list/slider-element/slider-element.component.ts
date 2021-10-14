import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slider-element',
  templateUrl: './slider-element.component.html',
  styleUrls: ['./slider-element.component.css']
})
export class SliderElementComponent implements OnInit {
  @Input() slider: { sliderNumber: number, routing: string, imgUrl: string, alt: string, text: string };
  @Output() newSliderNumber = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  newSliderData() {
    this.newSliderNumber.emit(this.slider.sliderNumber)
  }

}
