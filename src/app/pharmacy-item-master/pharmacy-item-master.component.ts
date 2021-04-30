import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-pharmacy-item-master',
  templateUrl: './pharmacy-item-master.component.html',
  styleUrls: ['./pharmacy-item-master.component.css']
})
export class PharmacyItemMasterComponent implements OnInit {
  displayedColumns = ['id', 'itemname', 'itemimage', 'action'];
  dataSource = new MatTableDataSource();
  results;
  apiUrl;
  status;
  userdetails;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  page: number = 0;
  limit: number = 25;
  // skip: number = 0;
  totalLength: number;
  pageIndex: number = 0;
  // pageLimit: number[] = [5, 10];
  pagenumber  = 0;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice: EasydealService, 
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.apiUrl = "https://dashboard.qbees.in/";
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getallpharmacymenu();
  }
  getallpharmacymenu(){
    this.easydeelservice.getallpharmacyitemmaster().subscribe(
      data =>{
        this.results = data;
        this.dataSource.data = this.results;
      },
      error =>{

      }
    )
  }
  getallgeneralmenu() {
    this.easydeelservice.getallgeneralmenubypagination(this.page).subscribe(
      data => {
        this.results = data['gmenu'];
        this.dataSource.data = this.results;
        let totalelements = data['totalPages'] * 20;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {

      }
    )
  }
  active(s) {
    console.log(s);

    this.easydeelservice.changestatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);
      },
      error => {
        this.toastr.error("Unable to Update status");
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);
      }
    )
  }
  inactive(s) {

    this.easydeelservice.changestatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);
      },
      error => {
        this.toastr.error("Unable to Update status");
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);

      }
    )
  }
  edit(s) {
    sessionStorage.setItem("pharmacy-item-master", JSON.stringify(s));
    this.router.navigate(['/edit-pharmacy-item-master'])
  }

  getdataforpagenumber(s)
  {
    this.easydeelservice.getallgeneralmenubypagination(s).subscribe(

      data => {
        this.dataSource = new MatTableDataSource();

        console.log(data);
        this.results = data['gmenu'];
        this.dataSource.data = this.results;
        // this.totalLength = data['totalPages'] * 20;
        // this.totalLength = 100;
        let totalelements = data['totalPages'] * 20;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {
        console.log(error);

      }
    )
  }
  // changePage(event) {
  //   console.log(event.pageIndex)
  //   this.pagenumber =event.pageIndex;
  //   this.easydeelservice.getallgeneralmenubypagination(event.pageIndex).subscribe(

  //     data => {
  //       this.dataSource = new MatTableDataSource();

  //       console.log(data);
  //       this.results = data['gmenu'];
  //       this.dataSource.data = this.results;
  //       // this.totalLength = data['totalPages'] * 20;
  //       // this.totalLength = 100;
  //       let totalelements = data['totalPages'] * 20;
  //       console.log(totalelements)
  //       this.totalLength = totalelements;
  //     },
  //     error => {
  //       console.log(error);

  //     }
  //   )
  // }
}
