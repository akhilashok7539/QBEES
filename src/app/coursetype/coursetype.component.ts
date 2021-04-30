import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-coursetype',
  templateUrl: './coursetype.component.html',
  styleUrls: ['./coursetype.component.css']
})
export class CoursetypeComponent implements OnInit {
  displayedColumns = ['id', 'coursetype', 'action'];
  dataSource = new MatTableDataSource();
  status;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice: EasydealService,private router:Router) { }

  ngOnInit() {
    this.getallcoursetype();
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    console.log(status);
  }

  getallcoursetype() {
    this.easydeelservice.getallcoursetype().subscribe(
      data => {
        let result: any = []
        result = data;
        this.dataSource.data = result
      },
      error => {

      },
    )

  }
  edit(r)
  {
    sessionStorage.setItem("coursetype",JSON.stringify(r));
    this.router.navigate(['/editcoursetype'])
  }
}
