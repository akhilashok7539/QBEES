import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  status;
  constructor() { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    console.log(this.status);
    
  }

}
