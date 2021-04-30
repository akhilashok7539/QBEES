import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-general-category',
  templateUrl: './general-category.component.html',
  styleUrls: ['./general-category.component.css']
})
export class GeneralCategoryComponent implements OnInit {
  displayedColumns = ['id', 'categorytype', 'action'];
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
    this.easydeelservice.getallgeneralcategory().subscribe(
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
    sessionStorage.setItem("Generalcategory",JSON.stringify(a))
    this.router.navigate(['/editgeneralcategory'])
  }
}
