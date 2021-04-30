import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-shop-admin-menu-name',
  templateUrl: './add-shop-admin-menu-name.component.html',
  styleUrls: ['./add-shop-admin-menu-name.component.css']
})
export class AddShopAdminMenuNameComponent implements OnInit {
  shopadminmenuFormRegistration:FormGroup;
  submitted = false;
  
  sname;
  location;
  mname;  
  mdes;
  prate;
  srate;
  dperc;
  damount;
  patime;
  pctime;
  mimages;
  // mstyle="";
  
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.shopadminmenuFormRegistration = this.formbuilder.group(
      {
        // sname: ['', Validators.required],
        location:['', Validators.required],
        mname:['', Validators.required],
        mdes:['', Validators.required],
        prate:['', Validators.required],
        srate:['', Validators.required],
        dperc:['', Validators.required],
        damount:['', Validators.required],
        patime:['', Validators.required],
        pctime:['', Validators.required],
        mimages:['', Validators.required],
        // mstyle: ['', Validators.required],
    })

  }
get f() { return this.shopadminmenuFormRegistration.controls; }

  submit(){
    this.submitted = true;

    // stop here if form is invalid
    if (this.shopadminmenuFormRegistration.invalid) {
        return;
    }
    else{

    }
  }
}