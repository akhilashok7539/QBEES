import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-pharmacy-menu',
  templateUrl: './add-pharmacy-menu.component.html',
  styleUrls: ['./add-pharmacy-menu.component.css']
})
export class AddPharmacyMenuComponent implements OnInit {
  addpharmacymenuFormRegistration: FormGroup;
  submitted = false;
  generalmenu;
  pname = '';
  imrp;
  isprice;
  idamount;
  idpercent;
  showorhide = "Show";
  status = "Active";
  results: any = [];
  cat;
  iname = '';
  isLoading = false;
  button = 'Submit';
  generalshopmenu: any = [];

  loginstatus;
  locations: any = [];
  userdetails;
  lId;
  pharmacyshops: any = [];
  pharmacymenu: any = [];

  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.addpharmacymenuFormRegistration = this.formbuilder.group(
      {
        pname: ['', Validators.required],
        isprice: ['', Validators.required],
        imrp: ['', Validators.required],
       
        idpercent: ['', Validators.required],
        iname: ['', Validators.required],
        status: ['', Validators.required],
        showorhide: ['', Validators.required],
      })
    // this.getallcategorytype();
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(this.userdetails)
    // if(this.loginstatus =='locationamin')
    // {
    //   this.lId = this.userdetails['locationId']._id;

    // }
    // this.getallShop();
    // this.getallgeneralmenu();
    this.getallpharmacy();
    this.getallpharmacymenu();
  }
  get f() { return this.addpharmacymenuFormRegistration.controls; }

  getallpharmacy() {
    this.easydeelservice.getmedicalshop().subscribe(
      data => {
        console.log(data);
        this.pharmacyshops = data;

      },
      error => {
        console.log(error);
      }
    )
  }
  getallpharmacymenu() {
    this.easydeelservice.getallpharmacyitemmaster().subscribe(
      data => {
        this.pharmacymenu = data;
      },
      error => {

      }
    )
  }
  getallShop() {
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
    console.log(this.loginstatus);

    if (this.loginstatus == 'masteradmin') {
      this.easydeelservice.getshopsbygeneralcategory().subscribe(
        data => {
          console.log(data);
          // this.results = data;
          this.generalshopmenu = data;
          for (let i = 0; i < this.generalshopmenu.length; i++) {
            if (this.generalshopmenu[i].category_id == null) {

            }
            else {

              this.results.push(this.generalshopmenu[i])
            }
          }
        },
        error => {
          console.log(error);
        }
      )
    }
    else if (this.loginstatus == 'locationamin') {
      // let ud;
      // this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
      console.log(this.lId)
      this.lId = this.userdetails['locationId']._id;
      // let ud = this.userdetails['locationId']._id;
      // console.log(JSON.parse(localStorage.getItem("userdetails")));

      this.easydeelservice.getallshopsbylocation(this.lId).subscribe(
        data => {
          console.log(data);
          this.results = data;
        },
        error => {

        }
      )
    }
    else if (this.loginstatus == 'shopadmin') {

    }

  }
  // getallcategorytype() {
  //   this.easydeelservice.getallgeneralcategory().subscribe(
  //     data => {

  //       this.cat = data;

  //     },
  //     error => {

  //     },
  //   )

  // }
  getallgeneralmenu() {
    this.easydeelservice.getallgeneralmenu().subscribe(
      data => {
        this.generalmenu = data;
        this.generalmenu.sort(function (a, b) {
          if (a['menu_name'] < b['menu_name']) {
            return -1;
          }
          else if (a['menu_name'] > b['menu_name']) {
            return 1;
          }
          else {
            return 0;
          }
        });
        // this.dataSource.data = this.results;
      },
      error => {

      }
    )
  }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.addpharmacymenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';

      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "pharmacy_id": this.pname,
        "salesrate": this.isprice,
        "mrp": this.imrp,
        "discamount": this.idpercent,
        "item_id": this.iname,
        "status": this.status,
        "show": this.showorhide,


      }
      this.easydeelservice.addpharmacymenu(req).subscribe(

        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("Pharmacy menu added Successfully");
          this.router.navigate(['/pharmacy-menu']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("Pharmacy menu added unsuccessful");
          this.router.navigate(['/pharmacy-menu'])
        }
      )

    }
  }
 
}