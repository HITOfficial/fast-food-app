import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrls: ['./slider-list.component.css'],
})
export class SliderListComponent implements OnInit {
  @Input() actualSlider: number;
  @Input() sliders: { sliderNumber: number, routing: string, imgUrl: string, alt: string, text: string }[];
  constructor() { }

  ngOnInit(): void {
  }

}
