import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-text',
  templateUrl: './slider-text.component.html',
  styleUrls: ['./slider-text.component.css']
})
export class SliderTextComponent implements OnInit {
  @Input() text: string
  constructor() { }

  ngOnInit(): void {
  }

}
