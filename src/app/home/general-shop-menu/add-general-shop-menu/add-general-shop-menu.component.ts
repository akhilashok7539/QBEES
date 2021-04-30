import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-general-shop-menu',
  templateUrl: './add-general-shop-menu.component.html',
  styleUrls: ['./add-general-shop-menu.component.css']
})
export class AddGeneralShopMenuComponent implements OnInit {
  generalshopmenuFormRegistration: FormGroup;
  submitted = false;
  generalmenu;
  sname = '';
  location = '';
  iquant;
  iprice;
  israte;
  imrp;
  idamount;
  idpercent;
  showorhide;
  status;
  results: any = [];
  cat;
  weight;
  iname = '';
  isLoading = false;
  button = 'Submit';
  generalshopmenu: any = [];
  charge = "No";
  weightstatus ="Yes";
  cleaning;
  loginstatus;
  locations: any = [];
  userdetails;
  lId;
  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    this.generalshopmenuFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        // cname: [''],
        location: ['', Validators.required],
        iquant: ['', Validators.required],
        iprice: ['', Validators.required],
        israte: ['', Validators.required],
        imrp: ['', Validators.required],
        idamount: ['', Validators.required],
        idpercent: ['', Validators.required],
        iname: ['', Validators.required],
        weight: [''],
        charge: ['', Validators.required],
        cleaning: [''],
        weightstatus: ['', Validators.required],
      })
    // this.getallcategorytype();
    this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
    this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    console.log(this.userdetails)
    // if(this.loginstatus =='locationamin')
    // {
    //   this.lId = this.userdetails['locationId']._id;

    // }
    this.getallShop();
    this.getallgeneralmenu();


  }
  get f() { return this.generalshopmenuFormRegistration.controls; }
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
    if (this.generalshopmenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';

      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "shop_id": this.sname,
        // "category_id": this.cname,
        "locationId": this.location,
        "generalmenu_id": this.iname,
        "quantity": this.iquant,
        "itemprice": this.iprice,
        "salesrate": this.israte,
        "itm_discount": this.idpercent,
        "discamount": this.idamount,
        "mrp": this.imrp,
        "charge": this.charge,
        "cleaning": this.cleaning,
        "": this.weight,
        // "":this.weightstatus,
      }
      this.easydeelservice.addgeneralshopmenu(req).subscribe(

        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("General shop menu added Successfully");
          this.router.navigate(['/generalshopmenu']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("General shop menu added unsuccessful");
          this.router.navigate(['/generalshopmenu'])
        }
      )

    }
  }
  shopselcted(s) {
    console.log(s);
    this.easydeelservice.getalllocationbyshopid(s).subscribe(
      data => {
        this.locations = data[0].locationId;
        console.log(this.locations);



      },
      error => {

      }

    )


  }
}