import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-boxes',
	templateUrl: './boxes.component.html',
	styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {
	boxesArray: { id: number, routerLink: string, header: string, buttonColor: string, buttonText: string, textColor: string, text: string, background: string, isImage: boolean }[] = [
		{ id: 0, routerLink: "/menu", header: "Our delicious menu!", buttonColor: "#ffc107", buttonText: "check out", textColor: "#000000", text: "", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: true },
		{ id: 1, routerLink: "/get-job", header: "Looking for job?", text: "Fill the form and join to our team!", buttonColor: "#f8f9fa", textColor: "#000000", buttonText: "Work in Fast food", background: "#ffc107", isImage: false },
		{ id: 2, routerLink: "/socials", header: "Follow us on socials", text: "", buttonColor: "#ffc107", buttonText: "Socials", textColor: "#000000", background: "#f8f9fa", isImage: false },
		{ id: 3, routerLink: "/promotional-sets", header: "Check ofert of the day", buttonColor: "#f8f9fa", buttonText: "Promotional sets", text: "Biggest promotions here", textColor: "#000000", background: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg", isImage: true }
	]
	constructor() { }

	ngOnInit(): void {
	}

}
