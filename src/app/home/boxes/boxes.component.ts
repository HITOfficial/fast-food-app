import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
	boxesArray: { id: number, routerLink: string, name: string, imgSrc: string }[] = [
		{ id: 0, routerLink: "", name: "Menu", imgSrc: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
		{ id: 1, routerLink: "promotional-sets", name: "Promotional sets", imgSrc: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
		{ id: 2, routerLink: "get-job", name: "Join to us!", imgSrc: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
		{ id: 3, routerLink: "socials", name: "Socials", imgSrc: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" }
	]
	constructor() { }

	ngOnInit(): void {
	}

}
