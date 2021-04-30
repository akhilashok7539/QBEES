import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-price-updator',
  templateUrl: './price-updator.component.html',
  styleUrls: ['./price-updator.component.css']
})
export class PriceUpdatorComponent implements OnInit {


  displayedColumns = ['menuname', 'purchaserate', 'salesrate','discountamount', 'discountpercentage'];
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