import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-admin-credentials',
  templateUrl: './add-admin-credentials.component.html',
  styleUrls: ['./add-admin-credentials.component.css']
})
export class AddAdminCredentialsComponent implements OnInit {
  addadmincredentialsFormRegistration: FormGroup;
  submitted = false;

  
  emailusername;
  password;
  location ="";
  disable = false;
  disabled = false;
  isLoading = false;
  button = 'Submit';
  // easydealservices: any;
  result:any =[];
  constructor(private formbuilder: FormBuilder, 
    private router:Router,private eaydeelservice:EasydealService,private toater:ToastrService) { }

  ngOnInit() {
    this.addadmincredentialsFormRegistration= this.formbuilder.group(
      {
        
        emailusername: ['', Validators.required],
        password: ['', Validators.required],
        location: ['', Validators.required],
        
      })
      this.getalllocations();
    }
    get f() { return this.addadmincredentialsFormRegistration.controls; }
    getalllocations(){
      this.eaydeelservice.getalllocations().subscribe(
        data =>{
          console.log(data);
          this.result= data;
    
          
        },
        error =>{
          console.log(error);
          
        }
      )
    }
      submit() {
       
          this.submitted = true;
          this.isLoading = true;
          this.button = 'Processing';
    
        // stop here if form is invalid
        if (this.addadmincredentialsFormRegistration.invalid) {
        
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
                  this.router.navigate(['/admin-credentials'])
              },
              error =>{
  
              }
            )
            
        }
       
      }
  
  }