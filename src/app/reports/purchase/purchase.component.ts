import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  displayedColumns = ['slno', 'shopname', 'location', 'purchaseamount'];
  dataSource = new MatTableDataSource();
  shops:any=[];
  shopid;
  fromdatepurchase;
  todatepurchase;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any[];
  purchaereportdata :any = [];
  totalpurchaseamount;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice:EasydealService,private datepipe:DatePipe,private toaster:ToastrService) { }


  ngOnInit() {
    this.getshop();

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
        "purchase": "All"
      },
      {
        "id": "`1",
        "purchase": "Adithya"
      },   {
        "id": "`1",
        "purchase": "Murali"
      },   {
        "id": "`1",
        "purchase": "Thaza"
      },
    ]
    }
    
    else if (s == "l") {
      this.results = [
        {
        "id": "`1",
        "purchase": "All"
      },
      {
        "id": "`1",
        "purchase": "Kayamkulam"
      },   {
        "id": "`1",
        "purchase": "Mavelikara"
      },   {
        "id": "`1",
        "purchase": "Karunagappally"
      },
    ]
    }

  }
  getshop()
  {
    this.easydealservice.getshop().subscribe(
      data =>{
        console.log(data);
        this.shops =data;
      },
      error =>{
        console.log(error);
      }
    )
  }
  shopevent($event) {
    console.log($event.target.value);
    this.shopid = $event.target.value;
  }
  fromdate($event) {
    console.log($event.target.value);
    this.fromdatepurchase = this.datepipe.transform($event.target.value, 'dd-MM-yyyy');
  }
  todate($event) {
    console.log($event.target.value);
    // this.todatepurchase = $event.target.value;
    this.todatepurchase = this.datepipe.transform($event.target.value, 'dd-MM-yyyy');
    this.getpurchaereport();
  }
  getpurchaereport()
  {
    if(this.shopid == undefined)
    {
      this.toaster.error("Please select a shop");
    }
    if(this.todatepurchase == undefined)
    {
      this.toaster.error("Please select a From date");

    }

    if(this.shopid != undefined && this.todatepurchase != undefined)
    {

    this.easydealservice.getpurchasereport(this.shopid,this.fromdatepurchase,this.todatepurchase).subscribe(
      data =>{
        console.log(data);
        this.purchaereportdata = data['data'];
        this.totalpurchaseamount = data['purchase_total']
        this.dataSource.data = this.purchaereportdata;
      },
      error =>{

      }
    )
  }

  }
}
