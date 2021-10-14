import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css'],
})
export class SliderListComponent implements OnInit {
  @Input() actualSlider: number;
  @Input() sliders: { sliderNumber: number, routing: string, imgUrl: string, alt: string, text: string }[];
  @Output() newSlider = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  getNewSlider(data: any) {
    this.newSlider.emit(data);
  }

}
