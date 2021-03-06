import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { History } from '../history';
import { HistoryService } from '../history.service';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  list:History[]=[]
  constructor(private router:Router,private route: ActivatedRoute,private historyService:HistoryService) { }

  ngOnInit(): void {
    this.list=this.historyService.getUsers();
  }
  back()
  {
    this.router.navigate(['/home']);
  }
}