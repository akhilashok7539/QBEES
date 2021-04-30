import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-location-admin-view-pendingrequest',
  templateUrl: './location-admin-view-pendingrequest.component.html',
  styleUrls: ['./location-admin-view-pendingrequest.component.css']
})
export class LocationAdminViewPendingrequestComponent implements OnInit {

  displayedColumns = ['id', 'menuname', 'menuimage', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any = [];
  apiUrl;
  page: number = 0;
  limit: number = 20;
  // skip: number = 0;
  totalLength: number;
  pageIndex: number = 0;
  // pageLimit: number[] = [5, 10];
  status;
  
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
}
