import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-submit-selection',
  templateUrl: './user-submit-selection.component.html',
  styleUrls: ['./user-submit-selection.component.css']
})
export class UserSubmitSelectionComponent implements OnInit {
@Input('userSubmitSelection') selectedDetails:any;
  constructor() { }

  ngOnInit() {
  }

}