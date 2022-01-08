import { Component, Input, OnInit } from '@angular/core';
import { IMenuProduct } from 'src/app/models/menu-product';
import { IMenuProductOpinion } from 'src/app/models/menu-product-opinion';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-opinions',
  templateUrl: './product-opinions.component.html',
  styleUrls: ['./product-opinions.component.css']
})
export class ProductOpinionsComponent implements OnInit {
  @Input() product: IMenuProduct;
  @Input() menuService: MenuService;


  constructor() { }

  ngOnInit(): void {
  }
  addOpinion() {
    const nicknameElement = document.querySelector<HTMLInputElement>(".nickname");
    const opinionElement = document.querySelector<HTMLInputElement>(".opinion");

    let flag: boolean = false;
    if (nicknameElement.value === "") {
      if (!nicknameElement.classList.contains("warning")) {
        flag = true;
        setTimeout(this.removeWarning, 2000, nicknameElement);
      }
    }

    if (opinionElement.value === "") {
      if (!opinionElement.classList.contains("warning")) {
        flag = true;
        setTimeout(this.removeWarning, 2000, opinionElement);
      }
    }


    if (!flag) {
      const opinion: IMenuProductOpinion = { user: nicknameElement.value, opinion: opinionElement.value };
      this.menuService.addOpinion(this.product, opinion);
      // this.menuService.
    }
  }

  removeWarning(element: HTMLInputElement) {
    if (element.classList.contains("warning")) {
      element.classList.remove("warning")
    }
  }

}
