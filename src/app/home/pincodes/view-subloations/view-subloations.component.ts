import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-view-subloations',
  templateUrl: './view-subloations.component.html',
  styleUrls: ['./view-subloations.component.css']
})
export class ViewSubloationsComponent implements OnInit {
  displayedColumns = ['id', 'location','deliverycharge'];
  dataSource = new MatTableDataSource();
  locationid;
  loationname;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservices:EasydealService,private router:Router) { }

  ngOnInit() {
    this.getallslocations();
  }
  getallslocations(){
    this.locationid = JSON.parse(sessionStorage.getItem('slocation'));
    this.loationname = this.locationid['location'];
    let lid = this.locationid['_id'];
    console.log(lid);
    
    this.easydealservices.getsubloationbyloationid(this.locationid['_id']).subscribe(
      data =>{
        let arr:any = [];
        arr = data;
        this.dataSource.data = arr;
      },
      error =>{

      }
    )
  }
}
