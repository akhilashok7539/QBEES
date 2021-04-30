import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shop-admin-orders',
  templateUrl: './shop-admin-orders.component.html',
  styleUrls: ['./shop-admin-orders.component.css']
})
export class ShopAdminOrdersComponent implements OnInit {

  displayedColumns = ['orderid',  'time',  'date', 'deliveryboynameandphoneno','ordertstatus', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit() {
  }

}