import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-pharmacy-menu',
  templateUrl: './pharmacy-menu.component.html',
  styleUrls: ['./pharmacy-menu.component.css']
})
export class PharmacyMenuComponent implements OnInit {
  displayedColumns = ['id','pname','itemname', 'itemmrp', 'itemsalesprice', 'action'];
  dataSource = new MatTableDataSource();
  result;
  status;
  userdetails;
  locationid;
  
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getallmedicalproducts();
  }
  
  getallmedicalproducts(){

  if(this.status =='masteradmin')
  {
    this.easydeelservice.getallmedicalproducts().subscribe(
      data =>
      {
    
        this.result=data;
        this.dataSource.data=this.result;
      },
      error =>
      {
    
      }
    )
  }
  else if(this.status == 'locationamin')   
  {
    this.locationid=this.userdetails['locationId']._id;
    console.log(this.locationid);
    this.easydeelservice.getallshopmenubylocation(this.locationid).subscribe(
      data =>
      {
    
        this.result=data;
        this.dataSource.data=this.result;
      },
      error =>
      {
    
      }
    )
  }
  else if(this.status == 'shopadmin')   
  {

  }

}
active(s)
{
  console.log(s);
  
this.easydeelservice.changegmstatus(s._id).subscribe(
  data =>{
    this.toastr.success("Status Updated");
    this.ngOnInit();
  },
  error =>{
    this.toastr.error("Unable to Update status");
    this.ngOnInit();

  }
)
}
inactive(s)
{
  
this.easydeelservice.changegmstatus(s._id).subscribe(
  data =>{
    this.toastr.success("Status Updated");
    this.ngOnInit();
  },
  error =>{
    this.toastr.error("Unable to Update status");
    this.ngOnInit();

  }
)
}
edit(s)
{
  sessionStorage.setItem("gmenu",JSON.stringify(s));
  this.router.navigate(['/edit-pharmacy-menu']);
}

}
