import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
// import { environment } from 'src/environments/environment';
import {Sort} from '@angular/material';
import { Observable,Subscription , Observer, fromEvent, merge } from 'rxjs';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})


export class CategoryComponent implements OnInit {
  displayedColumns = ['id', 'categoryname', 'image', 'action'];
  apiUrl;
  status;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  results: any = [];
  dataSource : MatTableDataSource<any>= new MatTableDataSource(this.results);
  isConnected: Observable<boolean>;

  constructor(private easydealservice: EasydealService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.apiUrl = "https://dashboard.qbees.in/";


    this.getallCategory();
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    console.log(status);
    
    


  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // console.log(this.dataSource.sort);
    
    this.dataSource.paginator = this.paginator;
  }

  edit(s) {
    sessionStorage.setItem("cat", JSON.stringify(s));
    this.router.navigate(['/editcategory'])

  }
  // sortData(sort: Sort) {
  //   const data = this.results.slice();
  //   console.log(data);
  //   this.dataSource.data = data;
  //   if (!sort.active || sort.direction == '') {
  //     this.results = data;
  //     return;
  //   }

  //   this.results = data.sort((a, b) => {
  //     let isAsc = sort.direction == 'asc';
  //     switch (sort.active) {
  //       case 'categoryname': return compare(a.name, b.name, isAsc);
  //       case 'action': return compare(a.name, b.name, isAsc);
  //       case 'id': return compare(a.name, b.name, isAsc);

     
  //       default: return 0;
  //     }
  //   });
  // }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  getallCategory() {
    this.easydealservice.getcat().subscribe(
      data => {
        console.log(data);
        this.results = data;
        this.dataSource.data = this.results;
      },
      error => {
        console.log(error);
      }
    )
  }
  active(s) {
    console.log(s);

    this.easydealservice.changecategorystatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  inactive(s) {

    this.easydealservice.changecategorystatus(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        this.ngOnInit();
      },
      error => {
        this.toastr.error("Unable to Update status");
        this.ngOnInit();

      }
    )
  }
  
}

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }