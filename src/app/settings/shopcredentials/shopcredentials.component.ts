import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-shopcredentials',
  templateUrl: './shopcredentials.component.html',
  styleUrls: ['./shopcredentials.component.css']
})
export class ShopcredentialsComponent implements OnInit {


  displayedColumns = ['slno', 'sname', 'emailusername','action'];
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