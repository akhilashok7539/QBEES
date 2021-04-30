import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-view-pre-orders',
  templateUrl: './view-pre-orders.component.html',
  styleUrls: ['./view-pre-orders.component.css']
})
export class ViewPreOrdersComponent implements OnInit {

  result :any = [];
  details:any = [];
  itemresult:any = [];
  oid;
  deliveryboys :any = [];
  dboyid;
  status ;
  dboyName;
  isStatus= false;
  bookingid;
  shopdetails:any = [];
  sname;
  sphone;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,
  private toaster:ToastrService,
  private dialogRef: MatDialogRef<ViewPreOrdersComponent>) 
  { 
    this.details = data;
    console.log(this.details);
    this.status = this.details.order_status;
    console.log(this.status);
    this.getorderbyorderid();
  }

  ngOnInit() {
  }
  getorderbyorderid()
  {
    this.oid = this.details['porder_id']
    this.easydeelservice.getpreorerbyuserid(this.oid).subscribe(
      data =>{
        this.itemresult = data['data'];
      },
      error =>{

      }
    )
  }
  confirm()
  {
    let req ={
        "order_status":"Confirm"
    }
    console.log(this.details['_id']);
    
    this.easydeelservice.confirmorder(req,this.details['_id']).subscribe(
      data =>{
        this.toaster.success("Order confirmed");
        this.dialogRef.close();
      },
      error =>{

      }
    )
  }
  cancelled()
  {
    
    let req ={
      "order_status":"Cancelled"
  }
  console.log(this.details['_id']);
  
  this.easydeelservice.confirmorder(req,this.details['_id']).subscribe(
    data =>{
      this.toaster.success("Order Cancelled");
      this.dialogRef.close();
    },
    error =>{

    }
  )
  }
  getpreordershopbyoid(){
    
    let poid = this.details['porder_id'];
    this.easydeelservice.getpreordershop(poid).subscribe(
      data =>{
        let req :any=[];

        req = data['data'];
        // console.log();
        
        this.shopdetails = req;
        this.sname = this.shopdetails[0].shop_id['shop_name'];
        this.sphone = this.shopdetails[0].shop_id['shop_phone'];
      },
      error =>{

      }
    )


  }
}
