import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-walletpoints',
  templateUrl: './walletpoints.component.html',
  styleUrls: ['./walletpoints.component.css']
})
export class WalletpointsComponent implements OnInit {

  walletpointsFormRegistration:FormGroup;
  submitted = false;
  
  rpoints;
  avalue;
  ramount;
  isLoading = false;
  button = 'Submit';
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  results:any =[];
  
  constructor(private formbuilder:FormBuilder,private easydealservices:EasydealService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.walletpointsFormRegistration = this.formbuilder.group(
      {
        rpoints: ['', Validators.required],
        avalue: ['', Validators.required],
        ramount: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })
    this.getallwalletpoints();
  }
get f() { return this.walletpointsFormRegistration.controls; }
getallwalletpoints(){
  this.easydealservices.getwalletpoints().subscribe(
  data =>{
    this.results = data;
    this.rpoints=data[0].reward_point;
    this.avalue =data[0].amount_value;
    this.ramount = data[0].redeem_amount;
  },
  error=>{
    
  })

}
submit(){
  this.submitted = true;
  this.isLoading = true;
  this.button = 'Processing';


  // stop here if form is invalid
  if (this.walletpointsFormRegistration.invalid) {
    this.isLoading = false;
    this.button = 'submit';
    return;
  }
  else {
    this.isLoading = true;
    this.button = 'Processing';
    let req = {
      "reward_point":this.rpoints,
      "amount_value":this.avalue,
      "redeem_amount":this.ramount

    }
    if(this.results.length == 0)
    {
      this.easydealservices.addwalletpoints(req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.router.navigate(['/settings']);
          this.toastr.success("Wallet Points added successfully");
        
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
  
        }
      )
    }
    else{
      this.easydealservices.updatewalletpoints(req,this.results[0]._id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.router.navigate(['/settings']);
  
          this.toastr.success("Wallet Points added successfully");
        
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
  
        }
      )
    }
   
  }
}
}