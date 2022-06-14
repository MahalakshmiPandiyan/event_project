import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Features } from '../features';
import { FeaturesService } from '../features.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  featuresList:Features ={
    id:0,name:'',amount:''}
    
  constructor(private router:Router,private route: ActivatedRoute,private features:FeaturesService) { }
  id: number = 0;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      if (this.id != null) {
        this.featuresList.id = (params['id']);
        const data = this.features.getUsersByID(this.id);
        if (data) {
          this.featuresList = (data);
        }
      }
    });
  }
  backButton(){
    this.router.navigate(['/home'])
  }
  tableDisplay() {
    if (this.featuresList.id === 0) {
      //Create New User
      console.log("id : " + this.featuresList.id);
      this.features.setUser(this.featuresList);
      alert("Details are added Successfully")
    }
    else {
      //Update User info
      this.features.updateUser(this.featuresList);
      alert("Details are Updated Successfully")
    }
    this.router.navigate(['/features'])
  }
}
