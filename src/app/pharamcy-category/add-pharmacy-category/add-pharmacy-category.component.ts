import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-pharmacy-category',
  templateUrl: './add-pharmacy-category.component.html',
  styleUrls: ['./add-pharmacy-category.component.css']
})
export class AddPharmacyCategoryComponent implements OnInit {

  addpharmacycategorytypeFormRegistration: FormGroup;
  submitted = false;

  mtype:any="";
  ename;
  mname;
  isLoading = false;
  button = 'Submit';
  requestbody;
  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }


  ngOnInit() {

    this.addpharmacycategorytypeFormRegistration = this.formbuilder.group(
      {
        ename: ['', Validators.required],
        mname: ['', Validators.required],
        mtype: ['', Validators.required],
      })

  }
  get f() { return this.addpharmacycategorytypeFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.addpharmacycategorytypeFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      // let s:String;
      // s = this.ctype;
      // console.log();
     
      this.requestbody = {

        // "category_name": this.ename.toUpperCase(),
"eng_name":this.ename,
"ml_name":this.mname,
"medicinetype":this.mtype,
      }
      this.easydeelservice.addpharmacycategory(this.requestbody).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';

          this.toaster.success("Pharmacy category added successfully");
          this.router.navigate(['/pharmacy-category'])
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      )
    }
  }
}