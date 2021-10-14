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
<<<<<<< HEAD
  currDateTime: number = new Date().getTime();
=======
>>>>>>> 515d73dff70f6dad487b1b9a1c4b5ae674a64ae4

  constructor() {
    this.sliders = [
      { sliderNumber: 0, routing: "/menu", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "menu", text: "Look on our menu" },
      { sliderNumber: 1, routing: "/promotional-sets", imgUrl: "https://images.wallpaperscraft.com/image/single/burger_hamburger_fast_food_french_fries_114386_2560x1080.jpg", alt: "promotional sets", text: "Pay less and get more buying promotional sets" },
      { sliderNumber: 2, routing: "/get-job", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "get job", text: "Join to our team" },
      { sliderNumber: 3, routing: "/socials", imgUrl: "https://images.hdqwalls.com/download/hot-spicy-burger-ys-2560x1080.jpg", alt: "socials", text: "Join us on social media" },
    ]
  }

  ngOnInit(): void {
<<<<<<< HEAD
    setInterval(this.checkDateTime.bind(this), 1000);
=======
>>>>>>> 515d73dff70f6dad487b1b9a1c4b5ae674a64ae4
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
<<<<<<< HEAD
    // reseting date time after manual image change
    this.updateDateTime()
  }

  updateDateTime() {
    this.currDateTime = new Date().getTime()
  }

  checkDateTime() {
    if (new Date().getTime() - this.currDateTime > 5000) {
      // updating date time to current
      this.updateDateTime()
      // changing actual slider image
      this.onSliderChange("right")
    }
=======
>>>>>>> 515d73dff70f6dad487b1b9a1c4b5ae674a64ae4
  }

}
