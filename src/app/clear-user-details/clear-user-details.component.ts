import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clear-user-details',
  templateUrl: './clear-user-details.component.html',
  styleUrls: ['./clear-user-details.component.css']
})
export class ClearUserDetailsComponent implements OnInit {
@Input() parentSelectedDetail1:any;
@Output() clearParentData=new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  
clear(){
   this.clearParentData.emit(this.parentSelectedDetail1);
 }
}