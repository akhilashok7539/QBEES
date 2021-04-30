import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-menu-approval',
  templateUrl: './menu-approval.component.html',
  styleUrls: ['./menu-approval.component.css']
})
export class MenuApprovalComponent implements OnInit {

  displayedColumns = ['mname', 'sname',  'location','menuimage',  'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private router:Router,private toaster:ToastrService,private easydeelservice:EasydealService) { }

  ngOnInit() {
    this.getallmenusforapproval();
  }
  getallmenusforapproval()
  {
    this.easydeelservice.getallmeusforapproval().subscribe(
      data =>{
        let arr :any= [];
        arr = data;
        this.dataSource.data = arr;
      },  
      error =>{

      }

    )
  }
  approve(s)
  {
    console.log(s._id);
    let req = {
      "status":"Approved"
  }
    this.easydeelservice.approvemenu(req,s._id).subscribe(
      data =>{
        this.toaster.success("Approved")
        this.ngOnInit();
      },
      error =>{
        this.toaster.error("Unable to approve")
      }
    )
    
  }
  Reject(s){
    console.log(s._id);
    let req = {
      "status":"Reject"
  }
    this.easydeelservice.approvemenu(req,s._id).subscribe(
      data =>{
        this.toaster.success("Rejected");
        this.ngOnInit();

      },
      error =>{
        this.toaster.error("Unable to Reject")
      }
    )
    
  }
}