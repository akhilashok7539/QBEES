import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-coursetype',
  templateUrl: './add-coursetype.component.html',
  styleUrls: ['./add-coursetype.component.css']
})
export class AddCoursetypeComponent implements OnInit {
  coursetypeFormRegistration: FormGroup;
  submitted = false;

  ctype;
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private router: Router, private easydeelservice: EasydealService, private toaster: ToastrService) { }

  ngOnInit() {
    this.coursetypeFormRegistration = this.formbuilder.group(
      {

        ctype: ['', Validators.required],

      })

  }
  get f() { return this.coursetypeFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.coursetypeFormRegistration.invalid) {
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
        "courceName": this.ctype.toUpperCase(),
      }



      this.easydeelservice.addcourse(req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.success("Course type added successfully");
          this.router.navigate(['/coursetype'])
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      )
    }
  }
}