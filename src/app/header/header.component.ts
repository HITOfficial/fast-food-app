import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../services/currency.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	menuHiden: boolean = true
	constructor(public currencyService: CurrencyService) {
	}



	ngOnInit(): void {
	}
}