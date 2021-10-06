import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input("imgUrl") url: string;
  @Input() alt: string;
  @Input() text: string;
  @Input() routing: string;
  constructor() { }

  ngOnInit(): void {
  }

}
