import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-shop-credentials',
  templateUrl: './add-shop-credentials.component.html',
  styleUrls: ['./add-shop-credentials.component.css']
})
export class AddShopCredentialsComponent implements OnInit {
  addshopcredentialsFormRegistration: FormGroup;
  submitted = false;

  sname ="";
  emailusername;
  password;
  disable = false;
  disabled = false;
  isLoading= false;
  button = 'Submit';
  location ="";
  constructor(private formbuilder: FormBuilder, 
    private router:Router,private eaydeelservice:EasydealService,private toater:ToastrService) { }

  ngOnInit() {
    this. addshopcredentialsFormRegistration= this.formbuilder.group(
    {
      sname: ['', Validators.required],
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
      location: ['', Validators.required],
      
    })
  }
  get f() { return this.addshopcredentialsFormRegistration.controls; }

    submit() {
      this.submitted = true;
      this.isLoading = true;
      this.button = 'Processing';

    // stop here if form is invalid
    if (this.addshopcredentialsFormRegistration.invalid) {
    
        this.isLoading = false;
        this.button = 'submit';
        return;
      }
      else {
        
        this.isLoading = true;
        this.button = 'Processing';
        let req = {
          "userName":this.emailusername,
          "phoneNumber":"123456789",
          "password":this.password,
          "locationId":this.location,
          "role":2
        }
        this.eaydeelservice.addlocationadmin(req).subscribe(
          data =>{
              this.router.navigate(['/shop-credentials'])
          },
          error =>{

          }
        )
        
    }
   
  }

}