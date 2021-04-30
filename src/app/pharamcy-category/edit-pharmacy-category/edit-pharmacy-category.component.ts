import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-pharmacy-category',
  templateUrl: './edit-pharmacy-category.component.html',
  styleUrls: ['./edit-pharmacy-category.component.css']
})
export class EditPharmacyCategoryComponent implements OnInit {
  editpharmacycategorytypeFormRegistration: FormGroup;
  submitted = false;

  pharmacycat: any = [];
  mtype: any = "";
  ename;
  mname;
  isLoading = false;
  button = 'Submit';
  itemcategoryid;
  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }


  ngOnInit() {

    this.editpharmacycategorytypeFormRegistration = this.formbuilder.group(
      {
        ename: ['', Validators.required],
        mname: ['', Validators.required],
        mtype: ['', Validators.required],
      })
    this.pharmacycat = JSON.parse(sessionStorage.getItem("pharmacy-category"));
    this.ename = this.pharmacycat['eng_name'];
    this.mname = this.pharmacycat['ml_name'];
    this.mtype = this.pharmacycat['medicinetype'];
    this.itemcategoryid = this.pharmacycat['_id'];
  }
  get f() { return this.editpharmacycategorytypeFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.editpharmacycategorytypeFormRegistration.invalid) {
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
      let req = {
        "eng_name": this.ename,
        "ml_name": this.mname,
        "medicinetype": this.mtype,

        // "category_name": this.ename.toUpperCase(),


      }
      this.easydeelservice.updatepaharmacycategory(req,this.itemcategoryid).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';

          this.toaster.success("Pharmacy category updated successfully");
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