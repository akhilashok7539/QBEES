import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-sublocations',
  templateUrl: './add-sublocations.component.html',
  styleUrls: ['./add-sublocations.component.css']
})
export class AddSublocationsComponent implements OnInit {
  locationFormRegistration:FormGroup;
  submitted = false;
  
  location:any = '';
  slocation;
  isLoading = false;
  button = 'Submit';
  dcharge;
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  result:any=[];
  constructor(private formbuilder:FormBuilder,private easydealservice:EasydealService,
     private router:Router,private taostr:ToastrService) { }

  ngOnInit() {
    this.locationFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        slocation: ['', Validators.required],
        dcharge:['',Validators.required]
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
    })
    this.getalllocations();
  }
get f() { return this.locationFormRegistration.controls; }
getalllocations(){
  this.easydealservice.getalllocations().subscribe(
    data =>{
      console.log(data);
      this.result = data;
      
    },
    error =>{
      console.log(error);
      
    }
  )
}
  submit(){
    this.submitted = true;
  this.isLoading = true;
  this.button = 'Processing';

    // stop here if form is invalid
    if (this.locationFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else{ 
      this.isLoading = true;
      this.button = 'Processing';

      let req={
        "locationId":this.location,
        "sublocation":this.slocation,
        "delivery_charge":this.dcharge
      }
      this.easydealservice.addslocation(req).subscribe(
        data =>
        {
        this.isLoading = false;
        this.button = 'Submit';
        this.router.navigate(['/pincodes']);
        this.taostr.success("Sub location added successfully");
        },

        error =>{
          this.isLoading = false;
        this.button = 'Submit';
          this.taostr.error("Sub location added unsuccessful");

        }
      )
    }
  }
}