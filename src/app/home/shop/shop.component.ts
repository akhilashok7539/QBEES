import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  displayedColumns = ['image', 'shopname', 'phonenumber','status','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any=[];
  apiUrl;
  loginstatus:any;
  locationid;
  userdetails;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    

    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice:EasydealService,private router:Router,) { }

  ngOnInit() {
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"))
     this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(this.userdetails);
    

    this.apiUrl="https://dashboard.qbees.in/";
    this.getallShop();
  }
  getallShop(){

    if(this.loginstatus =='masteradmin')
    {
      this.easydealservice.getshop().subscribe(
        data =>{
          console.log(data);
          this.results =data;
          this.dataSource.data = this.results;
        },
        error =>{
          console.log(error);
        }
      )
    }
    else if(this.loginstatus == 'locationamin')   
    {
      this.locationid=this.userdetails['locationId']._id;
      console.log(this.locationid);

    this.easydealservice.getallshopsbylocation(this.locationid).subscribe(
      data =>{
        console.log(data);
        this.results =data;
        this.dataSource.data = this.results;
      },
      error =>{

      }
    )
      
    }
    else if(this.loginstatus =='shopadmin')
    {

    }
    
  }
  
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  selectedevent(s) {
    console.log(s);
    if (s == "s") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Blackforest"
      },
      {
        "id": "`1",
        "shopname": "Adithya"
      },   {
        "id": "`1",
        "shopname": "Murali"
      },   {
        "id": "`1",
        "shopname": "Thaza"
      },
    ]
    }
    else if (s == "c") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Hotel"
      },
      {
        "id": "`1",
        "shopname": "Restaurant"
      },   {
        "id": "`1",
        "shopname": "Supermarket"
      },   {
        "id": "`1",
        "shopname": "Services"
      },
    ]
    }
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "shopname": "Haripad"
      },
      {
        "id": "`1",
        "shopname": "Kayamkulam"
      },   {
        "id": "`1",
        "shopname": "Mavelikara"
      },   {
        "id": "`1",
        "shopname": "Karunagappally"
      },
    ]
    }

  }
  edit(r)
  {
    sessionStorage.setItem("shop",JSON.stringify(r))
    this.router.navigate(['/editshop'])
  }
  active(r)
  {
    this.easydealservice.changestatusactive(r._id).subscribe(
      data =>{
        this.ngOnInit();
      },
      error =>{
        this.ngOnInit();

      },
    )

  }
  inactive(r)
  {
    this.easydealservice.changestatusactive(r._id).subscribe(
      data =>{
        this.ngOnInit();
      },
      error =>{
        this.ngOnInit();

      },
    )

  }
}
