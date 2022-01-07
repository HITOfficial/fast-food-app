import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-opinion',
  templateUrl: './user-opinion.component.html',
  styleUrls: ['./user-opinion.component.css']
})
export class UserOpinionComponent implements OnInit {
  @Input() opinion;
  constructor() { }

  ngOnInit(): void {
  }

}
