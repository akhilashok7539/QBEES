import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-location-admin-phonenumber',
  templateUrl: './add-location-admin-phonenumber.component.html',
  styleUrls: ['./add-location-admin-phonenumber.component.css']
})
export class AddLocationAdminPhonenumberComponent implements OnInit {
  addlocationadminphonenumberformregistration: FormGroup;
  submitted = false;

  location="";
  aphn;
  isLoading = false;
  button = 'Submit';
  results: any = [];
  locations: any = [];
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";

  constructor(private formbuilder: FormBuilder, private easydealservices: EasydealService, private router: Router, private toastr: ToastrService) { }


  ngOnInit() {
    this.addlocationadminphonenumberformregistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        aphn: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],

        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.getalllocations();
  }

  getalllocations() {
    this.easydealservices.getalllocations().subscribe(
      data => {
        console.log(data);
        let results: any = [];
        this.locations = data;


      },
      error => {
        console.log(error);

      }
    )
  }
  get f() { return this.addlocationadminphonenumberformregistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';


    // stop here if form is invalid
    if (this.addlocationadminphonenumberformregistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "location_id": this.location,
        "phone": this.aphn,


      }

      this.easydealservices.addlocationadminphone(req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.router.navigate(['/locationadminphonenumber'])
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