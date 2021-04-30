import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-rest-type',
  templateUrl: './add-rest-type.component.html',
  styleUrls: ['./add-rest-type.component.css']
})
export class AddRestTypeComponent implements OnInit {
  addrestaurantitemtypeformregistration: FormGroup;
  submitted = false;

  itype;
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }

  ngOnInit() {
    this.addrestaurantitemtypeformregistration = this.formbuilder.group(
      {

        itype: ['', Validators.required],

      })

  }
  get f() { return this.addrestaurantitemtypeformregistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.addrestaurantitemtypeformregistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let s:String;
      s = this.itype;
      console.log();
      let req = {
        "item_type": this.itype.toUpperCase(),
      }



      this.easydeelservice.addcourseitemtype(req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.success("Item type added successfully");
          this.router.navigate(['/restauranttype'])
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      );
      // )
    }
  }
}