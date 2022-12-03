import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-landing',
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css']
})
export class UserLandingComponent implements OnInit {
  @Input() parentSelectedDetail:any;
  constructor() { }

  ngOnInit() {
  }

  
}