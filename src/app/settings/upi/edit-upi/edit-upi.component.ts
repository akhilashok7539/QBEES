import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-upi',
  templateUrl: './edit-upi.component.html',
  styleUrls: ['./edit-upi.component.css']
})
export class EditUpiComponent implements OnInit {
  editupicredentialsFormRegistration: FormGroup;
  submitted = false;
  isLoading = false;
  button = 'Submit';

  location ="";
  upi; 
  disable = false;
  disabled = false;
  results :any=[];
  upidetails:any =[];
  constructor(private formbuilder: FormBuilder,private toaster:ToastrService,
    private easydeelservices:EasydealService,private router:Router) { }


  ngOnInit() {
    this. editupicredentialsFormRegistration= this.formbuilder.group(
    {
      location: ['', Validators.required],
      upi: ['', Validators.required],
      
      
    })
    this.getalllocations();
    this.upidetails =JSON.parse(sessionStorage.getItem("upi"))
    this.location = this.upidetails.location_id['_id'];
    this.upi = this.upidetails['upi']
  }
  get f() { return this.editupicredentialsFormRegistration.controls; }
  
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
  
      // stop here if form is invalid
      if (this.editupicredentialsFormRegistration.invalid) {
        this.isLoading = false;
        this.button = 'submit';
        return;
      }
      else {  
        this.isLoading = true;
        this.button = 'Processing';
        let req = {
          "location":this.location,
          "upi":this.upi
        }
        this.easydeelservices.updateupi(req,this.upidetails['_id']).subscribe(
          data =>{
            this.isLoading = false;
            this.button = 'Submit';
            this.toaster.success("Upi number updated succesfully");
            this.router.navigate(['/upi']);
          },
          error =>{
            this.isLoading = false;
            this.button = 'Submit';
            this.toaster.error("Already a number added in same location");
          }
        )
      }
    }
    getalllocations(){
      this.easydeelservices.getalllocations().subscribe(
        data =>{
          console.log(data);
          this.results=data;
          
        },
        error =>{
          console.log(error);
          
        }
      )
    }
}