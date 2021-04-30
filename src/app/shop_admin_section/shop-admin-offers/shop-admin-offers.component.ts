import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-shop-admin-offers',
  templateUrl: './shop-admin-offers.component.html',
  styleUrls: ['./shop-admin-offers.component.css']
})
export class ShopAdminOffersComponent implements OnInit {
 

    displayedColumns = ['menuimage', 'menudescription',  'location','totalquantitytopurchase', 'price','action'];
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
  