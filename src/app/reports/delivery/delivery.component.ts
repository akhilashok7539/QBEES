import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  displayedColumns = ['slno', 'date', 'salesamount', 'deliveryamount'];
  dataSource = new MatTableDataSource();
  fromdatepurchase;
  todatepurchase;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  dboyid;
  results: any[];
  totaldeliverycharge;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private datepipe:DatePipe) { }

  ngOnInit() {
    this.getalldeliveryboys();
  }
  getalldeliveryboys()
  {
    this.easydeelservice.getalldeliveryboy().subscribe(
      data =>{
        let s :any= [];
        s= data;
        this.results = s;
      },
      error =>{

      }
    )
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  fromdate($event) {
    console.log($event.target.value);
    this.fromdatepurchase = this.datepipe.transform($event.target.value, 'dd-MM-yyyy');
  }
  todate($event) {
    console.log($event.target.value);
    // this.todatepurchase = $event.target.value;
    this.todatepurchase = this.datepipe.transform($event.target.value, 'dd-MM-yyyy');
    this.getdeliveryreport();
  }
  selectedevent(s) {
    console.log(s);
    
    this.dboyid = s;
    // else if (s == "l") {
    //   this.results = [
    //     {
    //     "id": "`1",
    //     "purchase": "All"
    //   },
    //   {
    //     "id": "`1",
    //     "purchase": "Kayamkulam"
    //   },   {
    //     "id": "`1",
    //     "purchase": "Mavelikara"
    //   },   {
    //     "id": "`1",
    //     "purchase": "Karunagappally"
    //   },
    // ]
    // }

  }
  getdeliveryreport()
  {
    this.easydeelservice.getalldeliveryboyreport(this.dboyid,this.fromdatepurchase,this.todatepurchase).subscribe(
      data =>{
        let s :any= [];
        s= data['data'];
        // this.results = s;
        this.dataSource.data = s;
        this.totaldeliverycharge = data['delivery_total']
      },
      error =>{

      }
    )
  }
}
