import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-location-admin-phonenumber',
  templateUrl: './edit-location-admin-phonenumber.component.html',
  styleUrls: ['./edit-location-admin-phonenumber.component.css']
})
export class EditLocationAdminPhonenumberComponent implements OnInit {
  editlocationadminphonenumberformregistration: FormGroup;
  submitted = false;

  location;
  aphn;
  isLoading = false;
  button = 'Submit';
  results: any = [];
  locations: any = [];
  contact: any = [];
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";

  constructor(private formbuilder: FormBuilder, private easydealservices: EasydealService, private router: Router, private toastr: ToastrService) { }


  ngOnInit() {
    this.editlocationadminphonenumberformregistration = this.formbuilder.group(
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
this.contact=JSON.parse(sessionStorage.getItem("locationadminphonenumber"));
this.location=this.contact['location_id']._id;
this.aphn=this.contact['phone'];

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
  get f() { return this.editlocationadminphonenumberformregistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';


    // stop here if form is invalid
    if (this.editlocationadminphonenumberformregistration.invalid) {
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

      this.easydealservices.updatelocationadminphone(req,this.contact['_id']).subscribe(
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