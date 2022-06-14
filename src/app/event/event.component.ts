import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../history';
import { HistoryService } from '../history.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  today = new Date().toLocaleDateString()
  list:History={
    id: 0, event_name: '', date: '', time: '', food: '', photography: '', decoration: '',
    organizer: ''
  }
  
  constructor(private router:Router,private route: ActivatedRoute,private history:HistoryService,private userService:UserService) { }
  id: number = 0;
  role:string=''

  ngOnInit(): void {
    // console.log(this.today)
    this.role=this.userService.role;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.list.id = (params['id']);
        const data = this.history.getUsersByID(this.id);
        if (data) {
          this.list = (data);
        }
      }
    });
  }
  
  submit(){
    console.log(this.list)
  }
  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay() {
    if (this.list.id === 0) {
      //Create New User
      console.log("id : " + this.list.id);
      this.history.setUser(this.list);
      alert("Details are added Successfully")
    } 
    else {
      //Update User info
      this.history.updateUser(this.list);
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/organizer'])
  }

  dateValidation(){
    return true;
  }

}