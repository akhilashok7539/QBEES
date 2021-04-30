import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-pincodes',
  templateUrl: './edit-pincodes.component.html',
  styleUrls: ['./edit-pincodes.component.css']
})
export class EditPincodesComponent implements OnInit {
  editlocationFormRegistration:FormGroup;
  submitted = false;
  
  location;
  isLoading = false;
  button = 'Submit';
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  locations:any=[];
  constructor(private formbuilder:FormBuilder,private easydealservice:EasydealService, private router:Router,private taostr:ToastrService) { }

  ngOnInit() {
    this.editlocationFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })
 this.locations = JSON.parse(sessionStorage.getItem("location"));
 this.location=this.locations['location'];


  }
get f() { return this.editlocationFormRegistration.controls; }

  submit(){
    this.submitted = true;
  this.isLoading = true;
  this.button = 'Processing';

    // stop here if form is invalid
    if (this.editlocationFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else{ 
      this.isLoading = true;
      this.button = 'Processing';

      let req={
        "location":this.location,
       
      }
      this.easydealservice.updatelocation(req,this.locations['_id']).subscribe(
        data =>
        {
        this.isLoading = false;
        this.button = 'Submit';
        this.router.navigate(['/pincodes']);
        this.taostr.success("location added successfully");
        },

        error =>{
          this.isLoading = false;
        this.button = 'Submit';
          this.taostr.error("location added unsuccessful");

        }
      )
    }
  }
}
