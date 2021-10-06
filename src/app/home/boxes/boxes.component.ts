import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
	boxesArray: { id: number, routerLink: string, name: string, text: string, background: string, isImage: boolean }[] = [
		{ id: 0, routerLink: "", name: "Menu", text: "", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: true },
		{ id: 1, routerLink: "promotional-sets", text: "", name: "Promotional sets", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: false },
		{ id: 2, routerLink: "get-job", text: "", name: "Join to us!", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: true },
		{ id: 3, routerLink: "socials", text: "", name: "Socials", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: false }
	]
	constructor() { }

	ngOnInit(): void {
	}

}
