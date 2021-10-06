import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  sliders: { sliderNumber: number, routing: string, imgUrl: string, alt: string, text: string }[]
  actualSlider: number = 0
  totalSliders: number = 4

  constructor() {
    this.sliders = [
      { sliderNumber: 0, routing: "/menu", imgUrl: "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", alt: "menu", text: "Look on our menu" },
      { sliderNumber: 1, routing: "/promotional-sets", imgUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", alt: "promotional sets", text: "Pay less and get more buying promotional sets" },
      { sliderNumber: 2, routing: "/get-job", imgUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80", alt: "get job", text: "Join to our team" },
      { sliderNumber: 3, routing: "/socials", imgUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", alt: "socials", text: "Join us on social media" },
    ]
  }

  ngOnInit(): void {
  }

  onSliderChange(sliderChangeDirection: string) {
    // sliding to the right
    if (sliderChangeDirection == "right") {
      this.actualSlider = (this.actualSlider + 1) % this.totalSliders
    }
    // sliding to left
    else {
      if (this.actualSlider == 0) {
        this.actualSlider = this.totalSliders - 1
      }
      else {
        this.actualSlider -= 1
      }
    }
  }

}
