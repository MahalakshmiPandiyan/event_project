import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  minDate:any=''
  today = new Date().toLocaleDateString()
  list:History={
    id: 0, event_name: '', event_date: '', event_time: '', food: '', photography: '', decoration: '',
    organizer: ''
  }
  
  constructor(private router:Router,private route: ActivatedRoute,private history:HistoryService,private userService:UserService) { }
  id: number = 0;
  role:string=''

  ngOnInit(): void {

    
   this.dateValidation();
     
    
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
  tableDisplay(eventForm:NgForm) {
    this.history.postDetails(eventForm.value).subscribe((data)=>{
      console.log(data);
      
    })
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
    var date:any= new Date();
     
    var toDate:any=date.getDate();
    if(toDate < 10){
     toDate ="0"+ toDate;
    }
    var month=date.getMonth()+1;
    if(month < 10){
     month = '0'+month;
    }
    var year =date.getFullYear();
    this.minDate= year+"-"+month+"-"+toDate;
    return true;
  }

}