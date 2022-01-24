import { Component, Input, OnInit } from '@angular/core';
import { IMenuProduct } from 'src/app/models/menu-product';
import { IMenuProductOpinion } from 'src/app/models/menu-product-opinion';
import { AuthService } from 'src/app/services/auth.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-product-opinions',
  templateUrl: './product-opinions.component.html',
  styleUrls: ['./product-opinions.component.css']
})
export class ProductOpinionsComponent implements OnInit {
  @Input() product: IMenuProduct;
  @Input() menuService: MenuService;




  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }


  addOpinion() {
    const opinionElement = document.querySelector<HTMLInputElement>(".opinion");

    let flag: boolean = false;
    if (!opinionElement.value) {
      flag = true;
      if (!opinionElement.classList.contains("required")) {
        opinionElement.classList.add("required");
        setTimeout(this.removeWarning, 2000, opinionElement);
      }
    }

    if (!flag) {
      const opinion: IMenuProductOpinion = { user: this.authService.loggedUserName, opinion: opinionElement.value };
      this.menuService.addOpinion(this.product, opinion);
    }
  }

  removeWarning(element: HTMLInputElement) {
    if (element.classList.contains("required")) {
      element.classList.remove("required")
    }
  }

}
