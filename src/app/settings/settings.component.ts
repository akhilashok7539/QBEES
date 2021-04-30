import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  status;
  constructor() { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
  }

}
