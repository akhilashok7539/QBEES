import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.css']
})
export class ShopMenuComponent implements OnInit {

  displayedColumns = ['id', 'menuname', 'purchaserate', 'salesrate', 'discountpercentage', 'discountamount', 'shopname', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  options2: any = "";
  results: any[];
  status;
  shopmenu: any = [];
  filter2results:any=[];
  userdetails;
  locationid;

  page: number = 0;
  limit: number = 25;
  // skip: number = 0;
  totalLength: number;
  pageIndex: number = 0;
  pagenumber = 0;
  filterselectedornot = false;
  selectedshopId;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice: EasydealService, private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getrestmentall();
    console.log(status);
  }
  getrestmentall() {

    if (this.status == 'masteradmin') {
      this.easydealservice.getallmenus(this.page).subscribe(
        data => {
          let arr: any = [];
          arr = data;
          this.shopmenu = data['shop'];
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;
          this.totalLength = totalelements;
          console.log(arr)
        },
        error => {

        }
      )
    }
    else if (this.status == 'locationamin') {
      this.locationid = this.userdetails['locationId']._id;
      console.log(this.locationid);
      this.easydealservice.getallmenusbylocation(this.locationid,this.page).subscribe(
        data => {
          let arr: any = [];
          arr = data;
          this.shopmenu = data['posts'];
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;
          this.totalLength = totalelements;
          console.log(arr)
        },
        error => {

        }
      )
    }
    else if (this.status == 'shopadmin') {

    }

  }
  applyFilter(filterValue: string) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
    // this.filterselectedornot = true;
    if( this.filterselectedornot == true)
    {
      this.easydealservice.searchbyitemname(this.selectedshopId,filterValue).subscribe(
        data =>{
          this.shopmenu = data['fulldata'];
          this.dataSource.data = this.shopmenu;
        },
        error =>{

        }
      )
    }
    
  }
  edit(s) {
    sessionStorage.setItem("shopmenu", JSON.stringify(s));
    // this.router.navigate(['/edit-shop-menu'])
    window.open('#/edit-shop-menu', '_blank');

  }
  filter1(s) {
    console.log(s);
    if (this.status == 'masteradmin') {
      if (s == "s") {
        this.easydealservice.getshop().subscribe(
          data =>{
            console.log(data);
            this.filter2results = data;
           
          },
          error =>{
            console.log(error);
          }
        )
      }
     
      else  {
        this.easydealservice.getalllocations().subscribe(
          data =>{
            console.log(data);
            let results:any =[];
            results = data;
            this.filter2results= results;
            
          },
          error =>{
            console.log(error);
            
          }
        )
      }
    }
    else if (this.status == 'locationamin') 
    {
      if (s == "s") {
        this.locationid=this.userdetails['locationId']._id;
      console.log(this.locationid);

    this.easydealservice.getallshopsbylocation(this.locationid).subscribe(
      data =>{
        console.log(data);
        this.filter2results = data;
      },
      error =>{

      })
      }
      else {
       
      }
    }
    else{

    }
  

  }
  filter2(s)
  {
    console.log(s);
    this.selectedshopId = s;
    this.filterselectedornot = true;
    this.easydealservice.getrestmenubyshopid(s).subscribe(
      data =>{
        console.log(data);
        this.shopmenu = data['data'];
        this.dataSource.data = this.shopmenu;
      },
      error =>{

      }
    )
    
  }
  active(r) {
    this.easydealservice.changerestaurantmenuactive(r._id).subscribe(
      data => {

        // this.ngOnInit();
        this.getdataforpagenumber();
      },
      error => {
        // this.ngOnInit();
        this.getdataforpagenumber();

      },
    )

  }
  inactive(r) {
    this.easydealservice.changerestaurantmenuactive(r._id).subscribe(
      data => {
        // this.ngOnInit();
        this.getdataforpagenumber();
      },
      error => {
        // this.ngOnInit();
        this.getdataforpagenumber();

      },
    )

  }
  getdataforpagenumber() {
    if (this.status == 'masteradmin') {
      this.easydealservice.getallmenus(this.pagenumber).subscribe(
        data => {
          let arr: any = [];
          arr = data;
          this.shopmenu = data['shop'];
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;
          this.totalLength = totalelements;
          console.log(arr)
        },
        error => {

        }
      )
    }
    else if (this.status == 'locationamin') {
      this.locationid = this.userdetails['locationId']._id;
      console.log(this.locationid);
      this.easydealservice.getallmenusbylocation(this.locationid,this.pagenumber).subscribe(
        data => {
          let arr: any = [];
          arr = data;
          this.shopmenu = data['posts'];
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;
          this.totalLength = totalelements;
          console.log(arr)
        },
        error => {

        }
      )
    }
   
  }

  changePage(event) {
    if(this.filterselectedornot == false)
    {
      if (this.status == 'masteradmin')
    {
      console.log(event.pageIndex)
      this.pagenumber = event.pageIndex;
      this.easydealservice.getallmenus(event.pageIndex).subscribe(
        data => {
          this.dataSource = new MatTableDataSource();
          let arr: any = [];
          arr = data;
          this.shopmenu = data['shop'];
  
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;
          this.totalLength = totalelements;
          console.log(this.totalLength)
        },
        error => {
  
        }
      )
  
    }
    else if (this.status == 'locationamin') {
      console.log(event.pageIndex)
      this.pagenumber = event.pageIndex;
      this.easydealservice.getallmenusbylocation(this.locationid,event.pageIndex).subscribe(
        data => {
          this.dataSource = new MatTableDataSource();
          let arr: any = [];
          arr = data;
          this.shopmenu = data['posts'];
          this.dataSource.data = this.shopmenu;
          let totalelements = data['totalPages'] * 25;

          this.totalLength = totalelements;
          console.log(this.totalLength)
          console.log(arr)
        },
        error => {

        }
      )
    }
    }
    
   
  }
}
