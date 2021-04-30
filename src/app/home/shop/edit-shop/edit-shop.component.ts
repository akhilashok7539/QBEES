import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-shop',
  templateUrl: './edit-shop.component.html',
  styleUrls: ['./edit-shop.component.css']
})
export class EditShopComponent implements OnInit {
  // shopform:FormGroup;
  sessiondayssRepat
  repeatsessiondays = [];
  value;
  shopFormRegistration: FormGroup;
  submitted = false;
  sname;
  scat = "";
  saddress;
  simage;
  sln;
  sphn;
  sotime;
  sctime;
  profit;
  movalue;
  sdamnt;
  sdperc;
  pucharge;
  dcharge;
  dtime;
  showorhide = "Show";
  status = "Active";
  check;
  checkeddays;
  files;
  currentphoto;
  resultscat: any = [];
  locations: any = [];
  shopcatarray:any = [];
  shopdetails;
  id;
  isLoading = false;
  button = 'Submit';
  sessionarray:any=[];
  condtionyesorno = 'no';
  fileData: any;
error;
imagePreview;
employee
isvalidphoto = false;
shoplocations:any=[];
catidarray:any=[];
arr2:any=[];
userTypeFilters = [
  {
    key: 1, value: 'Value 1',
  },
  {
    key: 2, value: 'Value 2',
  },
  {
    key: 3, value: 'Value 3',
  },
  {
    key: 4, value: 'Value 4',
  }
];
@ViewChild('allSelected',{static:false}) private allSelected: MatOption;

  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router,
    private toaster: ToastrService) { }
  formData = new FormData();
  ngOnInit() {
    this.shopFormRegistration = this.formbuilder.group({
      sname: ['', Validators.required],
      
      saddress: ['', Validators.required],
      sln: [''],
      sphn: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      dtime: ['', Validators.required],
      sotime: ['', Validators.required],
      sctime: ['', Validators.required],
      profit: ['', Validators.required],
      movalue: ['', Validators.required],
      sdperc: ['', Validators.required],
      sdamnt: ['', Validators.required],
      simage: [''],
      pucharge: ['', Validators.required],
      // dcharge: ['', Validators.required],
      showorhide: [''],
      status: [''],
      check: [''],
      checkeddays: this.formbuilder.array([]),
      userType: new FormControl('')
    })
    this.getallCategory();
    this.getalllocations();
    this.shopdetails = JSON.parse(sessionStorage.getItem("shop"));
    this.sname = this.shopdetails['shop_name']
    this.dtime = this.shopdetails['deliveryTime']
    this.scat = this.shopdetails.category_id['_id']
    this.saddress = this.shopdetails['shop_address']
    this.sln = this.shopdetails['shop_landline']
    this.sphn = this.shopdetails['shop_phone']
    this.sotime = this.shopdetails['open_time']
    this.sctime = this.shopdetails['clos_time']
    this.profit = this.shopdetails['profitpercentage']
    this.movalue = this.shopdetails['minimum']
    this.sdperc = this.shopdetails['shop_discount']
    this.pucharge = this.shopdetails['pickupRate']
    this.dcharge = this.shopdetails['deliveryRate']
    this.sdamnt = this.shopdetails['shop_discamountamount']
    this.showorhide = this.shopdetails['shop_show']
    this.status = this.shopdetails['shop_state']
    this.id=this.shopdetails['_id']
    this.shoplocations = this.shopdetails['locationId'];
    this.shopcatarray = this.shopdetails['category_id'];
    // this.shopFormRegistration.controls.userType = this.shopcatarray;
    // console.log(this.catidarray);
    
    // for(let i =0;i<this.catidarray.length;i++)
    // {
    //   this.arr2.push(this.catidarray[i]._id);
    // }
    // console.log(this.arr2);
    // this.shopFormRegistration.controls.userType
    // .patchValue([...this.shopcatarray.map(item => item._id)]);
    // console.log( this.shopFormRegistration.controls.userType.value)
    
    // this.sessiondayssRepat = this.shopdetails['locationId'];
    // console.log(this.sessiondayssRepat);
    // // let arr = [];
    // for(let i=0;i<this.sessiondayssRepat.length;i++)
    // {
    //   this.sessionarray.push(this.sessiondayssRepat[i]._id)
    // }
    // console.log(this.sessionarray);
    // this.sessiondayssRepat = this.sessionarray;
    
    // this.repeatsessiondays=this.shopdetails['locationId']
    // console.log(this.repeatsessiondays);
    // let arr =[];
    // arr.push(this.shopdetails.locationId['_id']);
    // this.sessiondayssRepat =arr;
    // console.log(this.sessiondayssRepat=<FormArray>this.shopFormRegistration.controls.checkeddays);
    

  }
  // equals(objone,objtwo)
  // {
  //   if(typeof objone !== 'undefined' && typeof objtwo !== 'undefined')
  //   {
  //     return objone._id === objtwo._id
  //   }
  // }
  toggleAllSelection() {

    if (this.allSelected.selected) {
      console.log("enter here");

      this.shopFormRegistration.controls.userType
        .patchValue([...this.resultscat.map(item => item._id)]);
      console.log( this.shopFormRegistration.controls.userType.value)

    } else {
      console.log("enter heres");
      
      this.shopFormRegistration.controls.userType.patchValue([]);
      this.shopcatarray = this.shopFormRegistration.controls.userType.value;
      console.log( this.shopFormRegistration.controls.userType.value)
    }
  }

// add()
// {
//   this.shopcatarray= this.shopFormRegistration.controls.userType.value;
//   console.log(this.shopcatarray);
  
// }
  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.shopFormRegistration.controls.checkeddays;
    if (isChecked) {
      emailFormArray.push(new FormControl(time));
      this.value = emailFormArray['value']
      //console.log(this.value)

      for (let j = 0; j < this.value.length; j++) {
        this.sessiondayssRepat.push(this.value[j]);

      }
      console.log(this.sessiondayssRepat)

    }

    else {
      let index = emailFormArray.controls.findIndex(x => x.value == time)
      emailFormArray.removeAt(index);

      // this.sessiondayssRepat.push(this.shoplocations);
    }


    // console.log(emailFormArray)
  }
  get f() { return this.shopFormRegistration.controls; }

  getallCategory() {
    this.easydealservice.getcat().subscribe(
      data => {
        console.log(data);
        this.resultscat = data;

      },
      error => {
        console.log(error);
      }
    )
  }

  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;

        this.repeatsessiondays = this.locations;


      },
      error => {
        console.log(error);

      }
    )
  }
  addshopimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    if (this.shopFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      console.log("s")
      return;
    }
    else {
      this.shopcatarray= this.shopFormRegistration.controls.userType.value;
      console.log(this.shopcatarray);
      
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("shop_name", this.sname.toUpperCase( ))
      // this.formData.append("category_id", this.scat)
      this.formData.append("shop_phone", this.sphn)
      this.formData.append("shop_landline", this.sln)
      // this.formData.append("open",this.sotime)
      // this.formData.append("close",this.sctime)
      this.formData.append("open_time", this.sotime)
      this.formData.append("clos_time", this.sctime)
      this.formData.append("shop_discount", this.sdperc)
      this.formData.append("shop_discamountamount", this.sdamnt)
      // this.formData.append("shop_discamountamount", this.dcharge)
      this.formData.append("pickupRate", this.pucharge)
      this.formData.append("deliveryRate", "0")
      this.formData.append("minimum", this.movalue)
      this.formData.append("show", this.showorhide)
      this.formData.append("state", this.status)
      this.formData.append("profitpercentage", this.profit)
      this.formData.append("upload", this.currentphoto)
      this.formData.append("shop_address", this.saddress)

      // this.formData.append("locationId", this.sessiondayssRepat['0'])
      console.log(this.sessiondayssRepat);
      if(this.condtionyesorno == 'yes')
      {
        for (let i = 0; i < this.sessiondayssRepat.length; i++) {
          this.formData.append("locationId",this.sessiondayssRepat[i])
          // console.log("locationId", this.sessiondayssRepat[i]['_id']);
          
        }
      }
      else{
        for(let i=0;i<this.shoplocations.length;i++)
        {
          this.formData.append("locationId",this.shoplocations[i]._id)
        }
      }
      for(let j=0;j<this.shopcatarray.length;j++)
      {
        this.formData.append("category_id", this.shopcatarray[j])
      }
   

      this.easydealservice.editshop(this.formData,this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/shop']);
          this.toaster.success("Shop update Successfully")
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(error);
          this.formData.delete;

        }

      )

    }

  }
  addcategoryimage(event) {
    this.isvalidphoto = true;
    window.URL = window.URL;
    
    
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.files = event.target.files[0];
    
      let img = new Image();
    
      img.src = window.URL.createObjectURL( this.files );
      reader.readAsDataURL(this.files);
      reader.onload = () => {
        setTimeout(() => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;
    
          window.URL.revokeObjectURL( img.src );
          console.log(width + '*' + height);
          if ( width !== 100 && height !== 100) {
            this.isvalidphoto = true;
              console.log(width,height)
            this.toaster.error('photo should be 100*100 size');
            
            // form.reset();
          } else {
            this.isvalidphoto = false;
              console.log(width,height)
            // this.imgURL = reader.result;
            this.currentphoto = this.files.item(0);
          
          }
        }, 2000);
          };
      }
      }
    
}
