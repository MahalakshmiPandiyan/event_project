import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  role:string=''
  getRole(roleValue:string){
     this.role=roleValue
     return this.role;
  }
}