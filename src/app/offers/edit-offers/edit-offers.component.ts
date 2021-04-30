import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-offers',
  templateUrl: './edit-offers.component.html',
  styleUrls: ['./edit-offers.component.css']
})
export class EditOffersComponent implements OnInit {


  offerFormRegistration: FormGroup;
  submitted = false;
  results: any = [];
  location;
  sname = '';
  mname;
  oloc = '';
  odes;
  tqpurc;
  tnusers;
  oprice;
  aprice;
  adata;
  atime;
  ctime;
  cashback;
  bimages;
  formData = new FormData();
  files;
  currentphoto;
  offer;
  id;
  isLoading = false;
  button = 'Submit';
  pprice;
  otmethod = 'Offers';
  offerortopdeal: any;
  adsyesorno ="2";
  constructor(private formbuilder: FormBuilder,
    private easydeelservice: EasydealService,
    private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
    this.getallShop();
    this.getalllocations();
    this.offerFormRegistration = this.formbuilder.group(
      {

        sname: ['', Validators.required],
        mname: ['', Validators.required],
        oloc: ['', Validators.required],
        odes: ['', Validators.required],
        tqpurc: ['', Validators.required],
        tnusers: ['', Validators.required],
        oprice: ['', Validators.required],
        aprice: ['', Validators.required],
        adata: ['', Validators.required],
        atime: ['', Validators.required],
        pprice: [''],
        ctime: ['', Validators.required],
        cashback: ['', Validators.required],
        bimages: [''],
        adsyesorno: ['', Validators.required],
      })
      if(this.otmethod =='Offers')
      {
        this.offerFormRegistration.get('tqpurc').disable();
        this.offerFormRegistration.get('tnusers').disable();
    
      }

    this.offer = JSON.parse(sessionStorage.getItem("offer"));
    this.id = this.offer['_id'];
    console.log(this.id);

    this.sname = this.offer.shop_id['_id'];
    this.mname = this.offer['menu_name'];
    this.oloc = this.offer.location_id['_id'];
    this.odes = this.offer['offr_desc'];
    this.tqpurc = this.offer['total_qnty'];
    this.tnusers = this.offer['No_users'];
    this.oprice = this.offer['offr_price'];
    this.aprice = this.offer['actual_price'];
    this.adata = this.offer['av_date'];
    this.atime = this.offer['av_time'];
    this.cashback = this.offer['cashback'];
    this.ctime = this.offer['clos_time'];
    this.offerortopdeal = this.offer['off'];
    this.pprice = this.offer['purch_price'];
    if(this.offerortopdeal == 'Top')
    {
      this.otmethod = 'Top';
      console.log(this.otmethod);
      
    }
    else
    {
      this.otmethod = 'Offers';

    }
  }
  getallShop() {
    this.easydeelservice.getshop().subscribe(
      data => {
        console.log(data);
        this.results = data;

      },
      error => {
        console.log(error);
      }
    )
  }
  getalllocations() {
    this.easydeelservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.location = data;


      },
      error => {
        console.log(error);

      }
    )
  }
  get f() { return this.offerFormRegistration.controls; }
  addimg(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.offerFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'Submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("shop_id", this.sname);
      this.formData.append("menu_name", this.mname);
      this.formData.append("location_id", this.oloc);
      this.formData.append("description", this.odes);
      this.formData.append("total_qnty", this.tqpurc);
      this.formData.append("number_users", this.tnusers);
      this.formData.append("offer_price", this.oprice);
      this.formData.append("actual_price", this.aprice);
      this.formData.append("available_date", this.adata);
      this.formData.append("available_time", this.atime);
      this.formData.append("clos_time", this.ctime);
      this.formData.append("cashback", this.cashback);
      this.formData.append("upload", this.currentphoto);
      this.formData.append("off", this.otmethod);

      this.easydeelservice.editoffer(this.formData, this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.success("Offers are added");
          this.router.navigate(['/offers']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toaster.error("Unable to add Offers");
        }
      )

    }
  }
  topdealsoroffers(otmethod)
{
  console.log(otmethod);
  if(this.otmethod =='Offers')
  {
    this.offerFormRegistration.get('tqpurc').disable();
    this.offerFormRegistration.get('tnusers').disable();

  }
  else{
    this.offerFormRegistration.get('tqpurc').enable();
    this.offerFormRegistration.get('tnusers').enable();
  }


  if(this.otmethod =='Top Deals')
  {
    this.offerFormRegistration.get('cashback').disable();
  }
 else{
  this.offerFormRegistration.get('cashback').enable();

 }

}
}
