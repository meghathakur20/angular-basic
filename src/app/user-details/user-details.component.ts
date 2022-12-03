import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  selectedDetail: any;
  details: any[] = [
    { name: 'megha', id: 1, age: 24 },
    { name: 'Ankush', id: 2, age: 33 },
    { name: 'Adi', id: 3, age: 30 },
  ];

  showdetails(details) {
    this.selectedDetail = details;
  }

  clear(event) {
    this.selectedDetail = '';
  }
}