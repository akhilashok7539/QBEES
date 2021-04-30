import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-upi',
  templateUrl: './upi.component.html',
  styleUrls: ['./upi.component.css']
})
export class UpiComponent implements OnInit {
  displayedColumns = ['slno', 'location', 'upino','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  upireults:any = [];
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelervice:EasydealService,private router:Router) { }

  ngOnInit() {
    this.getallupi();
  }
  getallupi()
  {
    this.easydeelervice.getallupinumbers().subscribe(
      data =>{
        this.upireults = data;
        this.dataSource.data = this.upireults;
      },
      error =>{

      }
    )
  }
  edit(s){
    this.router.navigate(['/editupi'])
    sessionStorage.setItem("upi",JSON.stringify(s));
  }
}