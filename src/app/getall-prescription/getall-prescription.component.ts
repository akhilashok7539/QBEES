import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-getall-prescription',
  templateUrl: './getall-prescription.component.html',
  styleUrls: ['./getall-prescription.component.css']
})
export class GetallPrescriptionComponent implements OnInit {
  displayedColumns = ['orderid', 'customeraddress',  'time',  'date', 'ordertstatus'];
  dataSource = new MatTableDataSource();
result:any=[];
  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  status: any =[];
  userdetails: any=[];
  locationid;
  pres;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private formbuilder: FormBuilder, public dialog: MatDialog,
    private easydealservice: EasydealService, private router: Router, private ToastrService: ToastrService) { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getallorder() 
  
  }
getallorder()
{
  if(this.status =='masteradmin')
    {
      this.easydealservice.getallorderprescription().subscribe(
        data =>
        {
          this.result = data;
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
      this.easydealservice.getallorderBylocation(this.locationid).subscribe(
        data =>{
          this.result=data['data'];
          this.dataSource.data=this.result;
        },
        error =>{
  
        }
      )
    }
    else
    {

    }

}


}
