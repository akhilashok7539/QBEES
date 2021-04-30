import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-masteradminphonenumber',
  templateUrl: './masteradminphonenumber.component.html',
  styleUrls: ['./masteradminphonenumber.component.css']
})
export class MasteradminphonenumberComponent implements OnInit {
  masteradminphonenumberFormRegistration:FormGroup;
  submitted = false;
  
  aname;
  aphn;
  isLoading = false;
  button = 'Submit';
  results: any=[];
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder,private easydealservices:EasydealService,private router:Router,private toastr:ToastrService) { }


  ngOnInit() {
    this.masteradminphonenumberFormRegistration = this.formbuilder.group(
      {
        aname: ['', Validators.required],
        aphn: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],

        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })
this.getadminphone();
  }
  getadminphone()
  {
    this.easydealservices.getadminphone().subscribe(
      data=>{
        this.results =data;
        console.log(this.results.length);
        if(this.results.length== 0)
        {
         
        }
        else{
          this.aname=this.results[0].name;
          this.aphn = this.results[0].phone;
        }

      },
      error=>{
        console.log(error);
      }
      
    )

  }
get f() { return this.masteradminphonenumberFormRegistration.controls; }

  submit(){
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';


    // stop here if form is invalid
    if (this.masteradminphonenumberFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "name":this.aname,
        "phone":this.aphn,

        
      }
      if(this.results.length == 0)
      {
        this.easydealservices.addadminphone(req).subscribe(
          data => {
            this.isLoading = false;
            this.button = 'Submit';
            this.router.navigate(['/settings'])
            this.toastr.success("Phone Number added successfully");
          
          },
          error => {
            this.isLoading = false;
            this.button = 'Submit';
  
          }
        )
      }
      else
      {
        
        this.easydealservices.updateadminphone(req,this.results[0]._id).subscribe(
          data => {
            this.isLoading = false;
            this.button = 'Submit';
            this.router.navigate(['/settings'])
  
            this.toastr.success("Phone Number added successfully");
          
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