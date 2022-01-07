import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-opinions',
  templateUrl: './user-opinions.component.html',
  styleUrls: ['./user-opinions.component.css']
})
export class UserOpinionsComponent implements OnInit {
  @Input() productOpinions;
  constructor() { }

  ngOnInit(): void {
  }

}
