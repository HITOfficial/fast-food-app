import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-box',
	templateUrl: './box.component.html',
	styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
	@Input('boxData') data: { id: number, routerLink: string, header: string, buttonColor: string, buttonText: string, textColor: string, text: string, background: string, isImage: boolean };
	constructor() { }

	ngOnInit(): void {
	}


}
