import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-admin-credentials',
  templateUrl: './edit-admin-credentials.component.html',
  styleUrls: ['./edit-admin-credentials.component.css']
})
export class EditAdminCredentialsComponent implements OnInit {
  editadmincredentialsFormRegistration: FormGroup;
  submitted = false;

  
  emailusername;
  password;
  location ="";
  disable = false;
  disabled = false;
  isLoading = false;
  button = 'Submit';
  
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.editadmincredentialsFormRegistration= this.formbuilder.group(
    {
      
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
      location: ['', Validators.required],
      
    })
  }
  get f() { return this.editadmincredentialsFormRegistration.controls; }
    submit() {
     
        this.submitted = true;
        this.isLoading = true;
        this.button = 'Processing';
  
      // stop here if form is invalid
      if (this.editadmincredentialsFormRegistration.invalid) {
      
          this.isLoading = false;
          this.button = 'submit';
          return;
        }
        else {
          
          this.isLoading = true;
          this.button = 'Processing';

          
      }
     
    }

}