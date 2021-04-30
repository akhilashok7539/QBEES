import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-restaurant-menu',
  templateUrl: './edit-restaurant-menu.component.html',
  styleUrls: ['./edit-restaurant-menu.component.css']
})
export class EditRestaurantMenuComponent implements OnInit {

  restaurantmenuFormRegistration: FormGroup;
  submitted = false;

  mname;
  mdes;
  mtype = "";
  ctype = "";
  mimages;
  // mstyle="";
  result;
  files;
  currentphoto;
  formData = new FormData();
  restmenu;
  id;
  isLoading = false;
  button = 'Submit';
  condtionyesorno:any = 'no';
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
  resultscat:any = [];
  itemcatarray:any = [];
  itemcatarrays:any = [];
  @ViewChild('allSelected',{static:false}) private allSelected: MatOption;
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.restaurantmenuFormRegistration = this.formbuilder.group(
      {
        mname: ['', Validators.required],
        mdes: ['', [Validators.required, Validators.maxLength(50)]],
        mtype: ['', Validators.required],
        ctype: ['', Validators.required],
        mimages: [''],
        ItemType: new FormControl('')
        // mstyle: ['', Validators.required],
      })
    this.getallcoursetype();
    this.getallmenus();
    this.restmenu = JSON.parse(sessionStorage.getItem("restmenu"));
    this.mname = this.restmenu['menu_name'];
    this.mdes = this.restmenu['menu_desc'];
    this.mtype = this.restmenu['menu_type'];
    this.ctype = this.restmenu.courceId['_id'];
    this.id = this.restmenu['_id'];
    this.mname = this.restmenu['menu_name'];
    this.itemcatarrays = this.restmenu['item_type'];

  }
  getallmenus(){
    this.easydealservice.getallitems().subscribe(
      data =>{
        this.resultscat = data;
      },
      error =>{

      }
    )
  }
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.restaurantmenuFormRegistration.controls.ItemType
        .patchValue([...this.resultscat.map(item => item._id)]);
      console.log( this.restaurantmenuFormRegistration.controls.ItemType.value)

    } else {
      this.restaurantmenuFormRegistration.controls.ItemType.patchValue([]);

      console.log( this.restaurantmenuFormRegistration.controls.ItemType.value)
    }
  }
  get f() { return this.restaurantmenuFormRegistration.controls; }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    this.itemcatarray= this.restaurantmenuFormRegistration.controls.ItemType.value;
    // stop here if form is invalid
    if (this.restaurantmenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("menu_name", this.mname.toUpperCase())
      this.formData.append("menu_desc", this.mdes)
      this.formData.append("menu_type", this.mtype)
      this.formData.append("courceId", this.ctype)
      this.formData.append("upload", this.currentphoto)
      if(this.condtionyesorno == 'no')
      {
        for(let i=0;i<this.itemcatarrays.length;i++)
      {
        this.formData.append("item_type",this.itemcatarrays[i]._id);
      }
      }
      else{
        for(let i=0;i<this.itemcatarray.length;i++)
        {
          this.formData.append("item_type",this.itemcatarray[i]);
        }
      }
   
      this.easydealservice.editrestmenu(this.formData,this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/restaurantmenu']);
          this.toastr.success("Menu Added Successfully");
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(error);
          this.formData.delete;
          this.toastr.error("Menu Added Unsuccessful");

        }

      )
    }
  }
  getallcoursetype() {
    this.easydealservice.getallcoursetype().subscribe(
      data => {
        console.log(data);
        this.result = data
      },
      error => {

        console.log(error);

      },
    )

  }

  addmenuimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  // submit() {
  //   this.submitted = true;
  //   if (this.shopFormRegistration.invalid) {
  //     return;
  //   }
  //   else 
  //   {
  //   this.formData.append("shop_name",this.sname)
  //   this.formData.append("category_id",this.scat)
  //   this.formData.append("shop_phone",this.sphn)
  //   this.formData.append("shop_landline",this.sln)
  //   // this.formData.append("open",this.sotime)
  //   // this.formData.append("close",this.sctime)
  //   this.formData.append("open_time","10")
  //   this.formData.append("clos_time","50")
  //   this.formData.append("shop_discount",this.sdperc)
  //   this.formData.append("shop_discamountamount",this.sdamnt)
  //   this.formData.append("pickupRate",this.pucharge)
  //   this.formData.append("deliveryRate",this.dcharge)
  //   this.formData.append("minimum",this.movalue)
  //   this.formData.append("show",this.showorhide)
  //   this.formData.append("state",this.status)
  //   this.formData.append("profitpercentage",this.profit)
  //   this.formData.append("shop_img",this.currentphoto)
  //   this.formData.append("shop_address",this.saddress)
  //   this.formData.append("locationId",this.sessiondayssRepat['0'])

  //  this.easydealservice.addshop(this.formData).subscribe(
  //    data=>{
  //     console.log(data);
  //     this.formData.delete;
  //     this.router.navigate(['/shop']);
  //     this.toaster.success("Shop Added Successfully")
  //    },
  //    error=>{
  //      console.log(error);
  //     this.formData.delete;

  //    }

  //  )

  // }

}
