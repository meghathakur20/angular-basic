
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrudUserService {

  constructor(private http:HttpClient) { }

  getDetails(){
    return this.http.get('https://api.npms.io/v2/search?q=scope:angular')
    
  }

}