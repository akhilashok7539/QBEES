import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {
  displayedColumns = ['slno', 'date', 'orderid', 'purchaseamount', 'salesamount', 'deliverycharge','totalamount','profit'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any[];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
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
