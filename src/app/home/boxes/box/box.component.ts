import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-box',
	templateUrl: './box.component.html',
	styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
	@Input('boxData') data: { id: number, routerLink: string, name: string, text: string, background: string, isImage: boolean };
	ass: string = "element"
	constructor() { }

	ngOnInit(): void {
		setTimeout(() => console.log(this.data), 200)
	}

}
