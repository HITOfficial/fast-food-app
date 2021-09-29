import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  newsArray: { id: number, name: string, src: string }[] = [
    { id: 0, name: "Menu", src: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
    { id: 1, name: "Promotional sets", src: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
    { id: 2, name: "Join to us!", src: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" },
    { id: 3, name: "Socials", src: "https://d194ip2226q57d.cloudfront.net/images/Cheap-Eats_Lucky-Tiger_By-Brandon-.06f8d541.fill-500x300.jpg" }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
