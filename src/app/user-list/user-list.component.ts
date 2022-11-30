import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
@Input('parentUserDetail') details3:any[];
@Input('parentSelectedDetail2') selectedDetail1:any;
@Output() childSelectedDetail=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  showdetails(detail){
    this.childSelectedDetail.emit(detail);
  }
}