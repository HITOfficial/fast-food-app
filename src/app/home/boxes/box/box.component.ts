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
<<<<<<< HEAD
=======
		setTimeout(() => console.log(this.data), 200)
>>>>>>> 515d73dff70f6dad487b1b9a1c4b5ae674a64ae4
	}


}
