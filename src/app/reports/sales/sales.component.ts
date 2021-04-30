import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  displayedColumns = ['slno', 'date', 'orderid', 'deliverycharge','totalamount'];
  dataSource = new MatTableDataSource();
  myDate;
  totalamount = 0;
  deliverycharge = 0;
  responsearray:any;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any[];
  startdate;
  status;
  userdetails;
  enddate;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelervice:EasydealService,public datepipe: DatePipe) 
  { 
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    this.myDate = dd + '-' +mm +  '-' + yyyy;
    console.log(this.myDate);
    this.status = JSON.parse(localStorage.getItem("loginstatus"));

    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
  }

  ngOnInit() {
    this.getreportByCurrentDate();
  }

  getreportByCurrentDate()
  {

    if(this.status =='masteradmin')
    {
      let req ={
        "rdate":this.myDate
      }
      this.easydeelervice.getreportbyDate(this.myDate).subscribe(
        data =>{
          let arr :any=[];
          arr = data['data'];
          this.responsearray = data['data']
          this.dataSource.data = arr;
        
          for(let i=0;i<this.responsearray.length;i++)
          {
            this.totalamount = this.totalamount+parseInt(this.responsearray[i].total_price);
          }
          console.log(this.totalamount);
          for(let j=0;j<this.responsearray.length;j++)
          {
            this.deliverycharge = this.deliverycharge+parseInt(this.responsearray[j].shop_delivery); 
          }
          
        },
        error =>{
  
        }
      )
    }
    else if(this.status =='locationamin')
    {
      let req ={
        "rdate":this.myDate
      }
     let locationid=this.userdetails['locationId']._id;
      console.log(locationid);
      this.easydeelervice.getreportbyDatebyloations(locationid,this.myDate).subscribe(
        data =>{
          let arr :any=[];
          arr = data['data'];
          this.responsearray = data['data']
          this.dataSource.data = arr;
        
          for(let i=0;i<this.responsearray.length;i++)
          {
            this.totalamount = this.totalamount+parseInt(this.responsearray[i].total_price);
          }
          console.log(this.totalamount);
          for(let j=0;j<this.responsearray.length;j++)
          {
            this.deliverycharge = this.deliverycharge+parseInt(this.responsearray[j].shop_delivery); 
          }
          
        },
        error =>{
  
        }
      )
    }
    
    
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  fromdate(event){
    this.totalamount = 0;
    this.deliverycharge = 0;
    console.log(event.target.value);
    this.startdate = this.datepipe.transform(event.target.value, 'dd-MM-yyyy');
 
    console.log(this.datepipe.transform(event.target.value, 'dd-MM-yyyy'));
    
    
  }
  todate(event){
    this.totalamount = 0;
    this.deliverycharge = 0;
    console.log(event.target.value);
    this.enddate = this.datepipe.transform(event.target.value, 'dd-MM-yyyy')
    console.log(this.enddate);
    if(this.status =='masteradmin')
    {
      this.easydeelervice.getbydatereports(this.startdate,this.enddate).subscribe(
        data =>{
          let arr :any=[];
          arr = data['data'];
          this.responsearray = data['data']
          this.dataSource.data = arr;
          for(let i=0;i<this.responsearray.length;i++)
          {
            this.totalamount = this.totalamount+parseInt(this.responsearray[i].total_price);
          }
          console.log(this.totalamount);
          for(let j=0;j<this.responsearray.length;j++)
          {
            this.deliverycharge = this.deliverycharge+parseInt(this.responsearray[j].shop_delivery); 
          }
        },
        error =>{
  
        }
      )
    }
    else if(this.status =='locationamin')
    {
      let lid=this.userdetails['locationId']._id;
      console.log(lid);
      this.easydeelervice.getbydatereportsbylocation(lid,this.startdate,this.enddate).subscribe(
        data =>{
          let arr :any=[];
          arr = data['data'];
          this.responsearray = data['data']
          this.dataSource.data = arr;
          for(let i=0;i<this.responsearray.length;i++)
          {
            this.totalamount = this.totalamount+parseInt(this.responsearray[i].total_price);
          }
          console.log(this.totalamount);
          for(let j=0;j<this.responsearray.length;j++)
          {
            this.deliverycharge = this.deliverycharge+parseInt(this.responsearray[j].shop_delivery); 
          }
        },
        error =>{
  
        }
      )
    }
    

  }
  selectedevent(s) {
    console.log(s);
    if (s == "s") {
      this.results = [
        {
        "id": "`1",
        "sales": "All"
      },
      {
        "id": "`1",
        "sales": "Adithya"
      },   {
        "id": "`1",
        "sales": "Murali"
      },   {
        "id": "`1",
        "sales": "Thaza"
      },
    ]
    }
    
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "sales": "All"
      },
      {
        "id": "`1",
        "sales": "Kayamkulam"
      },   {
        "id": "`1",
        "sales": "Mavelikara"
      },   {
        "id": "`1",
        "sales": "Karunagappally"
      },
    ]
    }

  }
}
