import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-pharamcy-category',
  templateUrl: './pharamcy-category.component.html',
  styleUrls: ['./pharamcy-category.component.css']
})
export class PharamcyCategoryComponent implements OnInit {
  displayedColumns = [ 'english', 'malayalam','action'];
  dataSource = new MatTableDataSource();
  status;
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice: EasydealService,private toaster:ToastrService,private router:Router) { }

  ngOnInit() {

    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    this.getallcategorytype();
  }

  getallcategorytype() {
    this.easydeelservice.getpharmacycategroy().subscribe(
      data => {
        let result: any = []
        result = data;
        this.dataSource.data = result
      },
      error => {

      },
    )

  }

  active(s)
  {
    this.easydeelservice.gencatstatchange(s._id).subscribe(
      data =>
      {
        this.toaster.success("Status Updated Successfully");
        this.ngOnInit();
      },
      error =>{
        this.toaster.error("Unable to update Status Successfully")
        this.ngOnInit();

      }
    )
  }
  inactive(s)
  {
    this.easydeelservice.gencatstatchange(s._id).subscribe(
      data =>
      {
        this.toaster.success("Status Updated Successfully")
        this.ngOnInit();

      },
      error =>{
        this.toaster.error("Unable to update Status Successfully")
        this.ngOnInit();


      }
    )
  }
  edit(a)

  {
    sessionStorage.setItem("pharmacy-category",JSON.stringify(a))
    this.router.navigate(['/edit-pharmacy-category'])
  }
}
