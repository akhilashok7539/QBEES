import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-shop-credentials',
  templateUrl: './edit-shop-credentials.component.html',
  styleUrls: ['./edit-shop-credentials.component.css']
})
export class EditShopCredentialsComponent implements OnInit {

  editshopcredentialsFormRegistration: FormGroup;
  submitted = false;

  sname ="";
  emailusername;
  password;
  disable = false;
  disabled = false;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this. editshopcredentialsFormRegistration= this.formbuilder.group(
    {
      sname: ['', Validators.required],
      emailusername: ['', Validators.required],
      password: ['', Validators.required],
    
      
    })
  }
    submit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.editshopcredentialsFormRegistration.invalid) {
        return;
      }
      else {
  
      }
    }

}