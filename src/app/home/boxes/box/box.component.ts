import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-box',
	templateUrl: './box.component.html',
	styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
	@Input('boxData') data: { id: number, routerLink: string, name: string, imgSrc: string };
	ass: string = "element"
	constructor() { }

	ngOnInit(): void {
		setTimeout(() => console.log(this.data), 200)
	}

}
