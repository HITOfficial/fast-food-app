import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  sliders: { sliderNumber: number, routing: string, imgUrl: string, alt: string, text: string }[];
  actualSlider: number = 0;
  totalSliders: number = 4;

  constructor() {
    this.sliders = [
      { sliderNumber: 0, routing: "/menu", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "menu", text: "Look on our menu" },
      { sliderNumber: 1, routing: "/promotional-sets", imgUrl: "https://images.wallpaperscraft.com/image/single/burger_hamburger_fast_food_french_fries_114386_2560x1080.jpg", alt: "promotional sets", text: "Pay less and get more buying promotional sets" },
      { sliderNumber: 2, routing: "/get-job", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "get job", text: "Join to our team" },
      { sliderNumber: 3, routing: "/socials", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "socials", text: "Join us on social media" },
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

  newSliderElement(newSlider: number) {
    this.actualSlider = newSlider;
  }

}
