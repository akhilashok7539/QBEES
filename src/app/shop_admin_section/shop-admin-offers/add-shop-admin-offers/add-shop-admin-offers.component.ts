import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop-admin-offers',
  templateUrl: './add-shop-admin-offers.component.html',
  styleUrls: ['./add-shop-admin-offers.component.css']
})
export class AddShopAdminOffersComponent implements OnInit {

  shopadminofferFormRegistration:FormGroup;
  submitted = false;
  
  mname;
  oloc;
  odes;  
  tqpurc;
  tnusers;
  oprice;
  aprice;
  adata;
  atime;
  ctime;
  bimages;
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.shopadminofferFormRegistration = this.formbuilder.group(
      {
        mname: [''],
        oloc:['', Validators.required],
        odes:['', Validators.required],
        tqpurc: ['', Validators.required],
        tnusers: ['', Validators.required],
        oprice: ['', Validators.required],
        aprice: ['', Validators.required],
        adata: ['', Validators.required],
        atime: ['', Validators.required],
        ctime: ['', Validators.required],
        bimages: ['', Validators.required],
    })

  }
get f() { return this.shopadminofferFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopadminofferFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}
