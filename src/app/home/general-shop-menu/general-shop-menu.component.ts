import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-general-shop-menu',
  templateUrl: './general-shop-menu.component.html',
  styleUrls: ['./general-shop-menu.component.css']
})
export class GeneralShopMenuComponent implements OnInit {
  displayedColumns = ['id','sname','itemname', 'itemprice', 'itemquantity', 'action'];
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
    this.getallgeneralshopmenu();
  }
  
getallgeneralshopmenu(){

  if(this.status =='masteradmin')
  {
    this.easydeelservice.getallgeneralshopmenu().subscribe(
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
  this.router.navigate(['/edit-general-shop-menu']);
}

}
