import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-rest-type',
  templateUrl: './rest-type.component.html',
  styleUrls: ['./rest-type.component.css']
})
export class RestTypeComponent implements OnInit {
  displayedColumns = ['id', 'itemtype', 'action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(private easydeelservice:EasydealService,private router:Router) { }

  ngOnInit() {
    this.getall();
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  getall(){
    this.easydeelservice.getallitems().subscribe(
      data =>{
        let arr :any = [];
        arr = data;
        this.dataSource.data = arr;
      },
      error =>{

      }
    )
  }
edit(s){
  sessionStorage.setItem("itemtype",JSON.stringify(s));
  this.router.navigate(['/editrestauranttype'])
}
}
