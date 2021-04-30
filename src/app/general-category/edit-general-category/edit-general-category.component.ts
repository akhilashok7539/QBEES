import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-general-category',
  templateUrl: './edit-general-category.component.html',
  styleUrls: ['./edit-general-category.component.css']
})
export class EditGeneralCategoryComponent implements OnInit {
  categorytypeFormRegistration: FormGroup;
  submitted = false;

  ctype;
  generalcategory;
  isLoading = false;
  button = 'Submit';

  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }


  ngOnInit() {
    this.generalcategory = JSON.parse(sessionStorage.getItem("Generalcategory"));

    this.categorytypeFormRegistration = this.formbuilder.group(
      {

        ctype: ['', Validators.required],
      })
    this.ctype = this.generalcategory["category_name"];
  }
  get f() { return this.categorytypeFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.categorytypeFormRegistration.invalid) {
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
        "category_name": this.ctype.toUpperCase(),
      }
      this.easydeelservice.editgencat(req, this.generalcategory["_id"]).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.success("General category updated successfully");
          this.router.navigate(['/generalcategory'])
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.error("General category updated unsuccessful");
        }
      )
    }
  }
}