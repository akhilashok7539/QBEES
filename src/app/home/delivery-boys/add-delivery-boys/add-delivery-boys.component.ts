import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-delivery-boys',
  templateUrl: './add-delivery-boys.component.html',
  styleUrls: ['./add-delivery-boys.component.css']
})
export class AddDeliveryBoysComponent implements OnInit {
  deliveryboyFormRegistration: FormGroup;
  submitted = false;

  dname;
  uname;
  address;
  mobile;
  aadhar;
  password;
  isLoading = false;
  button = 'Submit';
  locations:any = [];
  location;
  constructor(private formbuilder: FormBuilder, private router:Router, private toastr:ToastrService,private easydeelservie:EasydealService) { }

  ngOnInit() {
    this.deliveryboyFormRegistration = this.formbuilder.group(
      {
        dname: ['', Validators.required],
        uname: ['', Validators.required],
        address: ['', Validators.required],
        mobile: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
        aadhar: ['', Validators.required],
        password: ['', Validators.required],
        location: ['', Validators.required],

      })
      this.getalllocations();
  }
  get f() { return this.deliveryboyFormRegistration.controls; }

  submit() {

    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.deliveryboyFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      let req = {
        "name": this.dname,
        "userName": this.uname,
        "address": this.address,
        "mobileNo": this.mobile,
        "aadhar_id": this.aadhar,
        "password": this.password,
        "locationId":this.location,
     
      }
      this.easydeelservie.adddeliveryboy(req).subscribe(
        data =>{
          this.toastr.success("Delivery Boy Added");
          this.router.navigate(['/deliveryboys']);
        },
        error =>{
          this.isLoading = false;
          this.button = 'submit';
          // this.toaster.error(error.error)
          this.toastr.error(error.error['responce']);
          
          // this.toaster.error("Unable to add Delivery Boy");
        }
      )

    }
  }
  getalllocations(){
    this.easydeelservie.getalllocations().subscribe(
      data =>{
        console.log(data);
        this.locations = data;
        
      },
      error =>{
        console.log(error);
        
      }
    )
  }
}