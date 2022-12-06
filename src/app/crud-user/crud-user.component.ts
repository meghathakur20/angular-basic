import { Component, OnInit } from '@angular/core';
import { CrudUserService } from './crud-user.service';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.component.html',
  styleUrls: ['./crud-user.component.css']
})
export class CrudUserComponent implements OnInit {

  data:any=[];

  
  constructor(private crudUserService:CrudUserService) { }

  ngOnInit() {
    this.crudUserService.getDetails().subscribe(
      (res:any)=>{
        console.log(res);
        this.data=res.results;
      }
      
    )
  }

}