import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-location-admin-phonenumber',
  templateUrl: './location-admin-phonenumber.component.html',
  styleUrls: ['./location-admin-phonenumber.component.css']
})
export class LocationAdminPhonenumberComponent implements OnInit {
  displayedColumns = ['location', 'phn','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getallphonenumbers();
  }
getallphonenumbers()
{
  this.easydeelservice.getallphonenumbers().subscribe(
    data=>{

      let req:any=[];
      req=data;
      this.dataSource.data=req;
    },
    error=>{

    }
    
  )
  }
  edit(s) {
    sessionStorage.setItem("locationadminphonenumber", JSON.stringify(s));
    this.router.navigate(['/editlocationadminphonenumber'])
  }
}