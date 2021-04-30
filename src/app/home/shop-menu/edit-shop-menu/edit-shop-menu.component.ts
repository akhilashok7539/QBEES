import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-shop-menu',
  templateUrl: './edit-shop-menu.component.html',
  styleUrls: ['./edit-shop-menu.component.css']
})
export class EditShopMenuComponent implements OnInit {
  shopmenuFormRegistration: FormGroup;
  submitted = false;

  sname = "";
  location = "";
  mname = "";
  mdes;
  prate;
  srate;
  dperc;
  damount;
  patime;
  pctime;
  files;
  currentphoto;
  mimages;
  // mstyle="";
  shops: any = [];
  locations: any = [];
  menu: any = [];
  formData = new FormData();
  showorhide = "Show";
  status = "Active";
  shopmenu;
  id;
  isLoading = false;
  button = 'Submit';
  restmenus:any =[];
  profitpercenatge;
  shopid;
  profitrate;
  pperct;
  loginstatus;
  userdetails;
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router, private ToastrService: ToastrService) { }

  ngOnInit() {
    this.shopmenuFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        location: ['', Validators.required],
        mname: ['', Validators.required],
        mdes: ['', [Validators.required, Validators.maxLength(50)]],
        prate: ['',],
        // pperct: [''],
        srate: ['', Validators.required],
        dperc: ['', Validators.required],
        damount: ['', Validators.required],
        patime: ['', Validators.required],
        pctime: ['', Validators.required],
        // mimages: [''],
        showorhide: ['', Validators.required],
        status: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.shopmenu = JSON.parse(sessionStorage.getItem("shopmenu"));
    this.sname = this.shopmenu.shop_id['_id'];
    this.location = this.shopmenu.location_id['_id'];
    this.mname = this.shopmenu.menu_id['_id'];

    this.mdes = this.shopmenu['menu_desc'];
    this.prate = this.shopmenu['purchaseRate'];
    this.srate = this.shopmenu['salesRate']
    this.dperc = this.shopmenu['discount']
    this.damount = this.shopmenu['discamountAmount']
    this.patime = this.shopmenu['availableTime']
    this.pctime = this.shopmenu['closingTime']
    this.status = this.shopmenu['status']
    this.showorhide = this.shopmenu['show']

    this.id = this.shopmenu['_id'];
// this.shopid = this.shopmenu['shop_id']._id;
this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
    this.getshopprofitbypercetage();

    this.getallShop();
    this.getalllocations();
    this.getallmenu();

  }
  get f() { return this.shopmenuFormRegistration.controls; }

  getshopprofitbypercetage()
  {
    this.easydealservice.getalllocationbyshopid(this.sname).subscribe(
      data =>
      {
        this.locations = data[0].locationId;
        console.log(this.locations);
        this.profitpercenatge = data[0].profitpercentage;
        
        console.log("PROFIT PERCENTAGE",this.profitpercenatge);
        
      },
      error =>{

      }
    )
  }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.shopmenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.calculateshopprofitpercentage();
      this.isLoading = true;
      this.button = 'Processing';
      this.prate = "0";
      // this.formData.append("shop_id", this.sname.toUpperCase())
      // this.formData.append("location_id", this.location)
      // this.formData.append("menu_id", this.mname)
      // this.formData.append("menu_desc", this.mdes)
      // this.formData.append("purchaseRate", this.prate)
      // this.formData.append("salesRate", this.srate)
      // this.formData.append("discount", this.dperc)
      // this.formData.append("discamountAmount", this.damount)
      // this.formData.append("closingTime", this.pctime)
      // this.formData.append("availableTime", this.patime)
      // this.formData.append("status", this.status)
      // this.formData.append("show", this.showorhide)
      let req = {
        "shop_id":this.sname,
        "location_id":this.location,
        "menu_id":this.mname,
        "menu_desc":this.mdes,
        "purchaseRate":this.prate,
        "salesRate":this.srate,
        "discount":this.dperc,
        "discamountAmount":this.damount,
        "closingTime":this.pctime,
        "availableTime":this.patime,
        "status":this.status,
        "show":this.showorhide



      }
      // this.formData.append("addrest_img", this.currentphoto)

      this.easydealservice.editshopmenu(req, this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.ToastrService.success("Shop Menu added sucessfully ")
          this.router.navigate(['/shopmenu']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.ToastrService.error("Shop Menu unable to add sucessfully ")

        }
      )
    }
  }
  addshopimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  shopselcted(s) {
    console.log(s);
    this.easydealservice.getalllocationbyshopid(s).subscribe(
      data =>
      {
        this.locations = data[0].locationId;
        console.log(this.locations);
        this.profitpercenatge = data[0].profitpercentage;
        

      },
      error =>{

      }
    )


  }
  getallShop() {
    if (this.loginstatus == 'masteradmin') {
      this.easydealservice.getallshopmappedtorestaurant().subscribe(
        data => {
          console.log(data);
          // this.shops = data;
          this.restmenus=data;
          for(let i=0;i<this.restmenus.length;i++)
          {
            if(this.restmenus[i].category_id==null)
            {
  
            }
            else
            {
              
              this.shops.push(this.restmenus[i])
            }
          }
          // this.dataSource.data = this.results;
        },
        error => {
          console.log(error);
        }
      )
    }
    if (this.loginstatus == 'locationamin') {
      let ud = this.userdetails['locationId']._id;
      this.easydealservice.getallshopsbylocation(ud).subscribe(
        data =>{
          console.log(data);
         this.shops =data;
          // this.dataSource.data = this.results;
        },
        error =>{
  
        }
      )
    }
    
  }
  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;


      },
      error => {
        console.log(error);

      }
    )
  }
  getallmenu() {

    this.easydealservice.getallmenu().subscribe(

      data => {
        console.log(data);
        this.menu = data;
        this.menu.sort(function (a,b)
        {
          if(a['menu_name'] <b['menu_name'])
          {
            return -1;
          }
          else if(a['menu_name'] >b['menu_name'])
          {
            return 1;
          }
          else {
            return 0;
          }
        });
      },
      error => {
        console.log(error);

      }
    )
  }
  calculateshopprofitpercentage() {
    let ppcaluate;
    let number = 100;
    let res = (this.profitpercenatge / number);
    let res2 = (this.srate*res);
    let profitrate = this.srate - res2;
    this.prate = profitrate.toFixed();
    console.log(this.prate);

  }

}
