import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  constructor(private router:Router,private route: ActivatedRoute,private userService:UserService) { }

  name:string="maha";
  passwordValue:string='';
  roleValue:string='';
  ngOnInit(): void {
  }
  dashBoard(){
    console.warn(this.userService.getRole(this.roleValue));
    if(this.roleValue==='user')
    {
      console.log(this.roleValue);
      this.router.navigate(['/home']);
    }
    if(this.roleValue==='admin')
    {
      console.log(this.roleValue);
      this.router.navigate(['/home']);
    }
    // else{
    //   this.router.navigate(['/dashboard']);

    // }
  }
}