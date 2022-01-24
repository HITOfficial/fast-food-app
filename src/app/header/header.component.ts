import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { CurrencyService } from '../services/currency.service';
import { SelectedProductsService } from '../services/selected-products.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	menuHiden: boolean = true
	constructor(public currencyService: CurrencyService, public selectedProductsService: SelectedProductsService, public authService: AuthService) {
	}



	ngOnInit(): void {
	}
}