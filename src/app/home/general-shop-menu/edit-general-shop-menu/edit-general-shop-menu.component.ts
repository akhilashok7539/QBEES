import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-general-shop-menu',
  templateUrl: './edit-general-shop-menu.component.html',
  styleUrls: ['./edit-general-shop-menu.component.css']
})
export class EditGeneralShopMenuComponent implements OnInit {

  generalshopmenuFormRegistration: FormGroup;
  submitted = false;
  generalmenu;
  sname = '';
  location= '';
  iquant;
  iprice;
  israte;
  imrp;
  weight;
  idamount;
  idpercent;
  showorhide;
  status;
  results:any=[];
  cat;
  iname ='';
  generalsmenu;
  id;
  gmenu:any =[];
  isLoading = false;
  button = 'Submit';
  generalshopmenu:any=[];
  charge ="No";
  weightstatus="Yes";
  cleaning;
  locations:any=[];
  loginstatus;
  userdetails;
  lId;
  constructor(private formbuilder: FormBuilder,
     private easydeelservice: EasydealService, private router: Router, private toastr: ToastrService) { }

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
        // showorhide: ['', Validators.required],
        // status: ['', Validators.required],
      })
      this.gmenu = JSON.parse(sessionStorage.getItem("gmenu"));

      console.log(this.gmenu);
        this.loginstatus = JSON.parse(localStorage.getItem("loginstatus"));
      this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
      // if(this.loginstatus =='locationamin')
      // {
      //   this.lId = this.userdetails['locationId']._id;

      // }
      this.getallShop();

      this.sname = this.gmenu.shop_id['_id']
      this.iname = this.gmenu.generalmenu_id['_id']
      this.iquant = this.gmenu['itm_qnty']
      this.iprice = this.gmenu['itm_price']
      this.israte = this.gmenu['itm_srate']
      this.imrp = this.gmenu['itm_mrp']
      this.idamount = this.gmenu['itm_disc']
      this.idpercent = this.gmenu['itm_discam']
    
      // this.locations = this.gmenu.locationId
      // console.log(this.locations);
      // this.locations.push(this.gmenu.locationId)
      this.getalllocationsByShopId();
      let arr = [];
      arr.push(this.gmenu.locationId)
      this.locations = arr;

      
      this.id = this.gmenu['_id']
    // this.getallcategorytype();
    this.getallgeneralmenu();
  
  }
  get f() { return this.generalshopmenuFormRegistration.controls; }
  getalllocationsByShopId()
  {
    this.easydeelservice.getalllocationbyshopid(this.sname).subscribe(
      data =>
      {
        this.locations = data[0].locationId;
        console.log(this.locations);

        this.location = this.gmenu.locationId['_id']
      },
      error =>{

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
          this.generalshopmenu=data;
          for(let i=0;i<this.generalshopmenu.length;i++)
          {
            if(this.generalshopmenu[i].category_id==null)
            {
  
            }
            else
            {
              
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
      this.lId = this.userdetails['locationId']._id;
      // this.userdetails = JSON.parse(localStorage.getItem("userdetails"));
      console.log(this.lId)

      // let ud = this.userdetails['locationId']._id;
      // console.log(JSON.parse(localStorage.getItem("userdetails")));
      
      this.easydeelservice.getallshopsbylocation(this.lId).subscribe(
        data =>{
          console.log(data);
         this.results =data;
        },
        error =>{
  
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
  getallgeneralmenu()
  {
  this.easydeelservice.getallgeneralmenu().subscribe(
  data=>
  {
  this.generalmenu=data;
  this.generalmenu.sort(function (a,b)
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
  // this.dataSource.data = this.results;
  },
    error =>
    {
  
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
        "locationId":this.location,
        "generalmenu_id":this.iname,
        "quantity": this.iquant,
        "itemprice": this.iprice,
        "salesrate": this.israte,
        "itm_discount": this.idpercent,
        "discamount": this.idamount,
        "mrp": this.imrp,
        "charge":this.charge,
        "cleaning":this.cleaning,
        "":this.weightstatus,
        // "":this.weight,
      }
      this.easydeelservice.editgeneralmenu(req,this.id).subscribe(

        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("General shop menu updated Successfully");
          this.router.navigate(['/generalshopmenu']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("General shop menu updated unsuccessful");
          // this.router.navigate(['/generalshopmenu'])
        }
      )

    }
  }
  shopselcted(s)
  {
    console.log(s);
    this.easydeelservice.getalllocationbyshopid(s).subscribe(
      data =>
      {
        this.locations = data[0].locationId;
        console.log(this.locations);
    
        

      },
      error =>{

      }
    )

    
  }
}
