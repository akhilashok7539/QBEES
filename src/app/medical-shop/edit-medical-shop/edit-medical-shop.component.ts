import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatOption } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-medical-shop',
  templateUrl: './edit-medical-shop.component.html',
  styleUrls: ['./edit-medical-shop.component.css']
})
export class EditMedicalShopComponent implements OnInit {
  sessiondayssRepat
  repeatsessiondays = [
    {
      "id": "6",
      "day": "Kochi",

    },

    {
      "id": "0",
      "day": "Haripad",
    },
    {
      "id": "1",
      "day": "Alappuzha",
    },
    {
      "id": "2",
      "day": "Kollam",
    },
    {
      "id": "3",
      "day": "Karthikappally",
    },

  ]
  value;
  shopcatarray: any = [];
  pharmacyFormRegistration: FormGroup;
  submitted = false;

  mtype: any = "";
  pname;
  plic;
  paddress;
  pln;
  pphn;
  potime;
  pctime;
  oname;
  omob;
  cpname;
  cpphn;
  ppercent;
  pimage;
  dpercent;
  showorhide = "Show";
  status = "Active";
  check;
  checkeddays;
  files;
  password;
  username;
  currentphoto;
  resultscat: any = [];
  locations: any = [];
  isLoading = false;
  button = 'Submit';
  condtionyesorno = 'no';
  shoplocations:any=[];

  fileData: any;
  error;
  imagePreview;
  employee
  isvalidphoto = false;
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
  pharmacyid;
  pharmacy:any=[];
  @ViewChild('allSelected', { static: false }) private allSelected: MatOption;
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService,
    private router: Router,
    private toaster: ToastrService) { }
  formData = new FormData();
  ngOnInit() {
    this.pharmacyFormRegistration = this.formbuilder.group({
      mtype: ['', Validators.required],
      pname: ['', Validators.required],
      plic: ['', Validators.required],
      paddress: ['', Validators.required],
      pln: ['', Validators.required],
      dpercent: ['', Validators.required],
      pphn: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      omob: ['', [Validators.required, Validators.pattern('[6-9]\\d{9}')]],
      cpphn: ['', Validators.required],
      potime: ['', Validators.required],
      pctime: ['', Validators.required],
      oname: ['', Validators.required],
      cpname: ['', Validators.required],
      ppercent: ['', Validators.required],
      pimage: [''],
      password: ['', Validators.required],
      username: ['', Validators.required],
      // pucharge: ['', Validators.required],
      // dcharge: ['', Validators.required],
      showorhide: [''],
      status: [''],
      check: [''],
      checkeddays: this.formbuilder.array([]),
      userType: new FormControl('')
    })
    this.getallCategory();
    this.getalllocations();
    this.pharmacy=JSON.parse(sessionStorage.getItem("Pharmacy"));
    this.mtype=this.pharmacy['medicine_type'];
    this.pname=this.pharmacy['pharmacy_name'];
    this.plic=this.pharmacy['licence'];
    this.paddress=this.pharmacy['shop_address'];
    this.pln=this.pharmacy['landline'];
    this.ppercent=this.pharmacy['purch_percentage'];
    this.pphn=this.pharmacy['shop_phone'];
    this.omob=this.pharmacy['owner_phone'];
    this.cpphn=this.pharmacy['contact_phone'];
    this.potime=this.pharmacy['open_time'];
    this.pctime=this.pharmacy['clos_time'];
    this.oname=this.pharmacy['ownername'];
    this.cpname=this.pharmacy['contactname'];
    this.password=this.pharmacy['password'];
    this.username=this.pharmacy['username'];
    this.status=this.pharmacy['shop_state'];
    this.showorhide=this.pharmacy['shop_show'];
    this.shoplocations=this.pharmacy['locationId'];
    this.pharmacyid = this.pharmacy['_id'];
    this.dpercent = this.pharmacy['discount'];
  }
  toggleAllSelection() {

    if (this.allSelected.selected) {
      console.log("enter here");

      this.pharmacyFormRegistration.controls.userType
        .patchValue([...this.resultscat.map(item => item._id)]);
      console.log(this.pharmacyFormRegistration.controls.userType.value)

    } else {
      console.log("enter heres");

      this.pharmacyFormRegistration.controls.userType.patchValue([]);
      this.shopcatarray = this.pharmacyFormRegistration.controls.userType.value;
      console.log(this.pharmacyFormRegistration.controls.userType.value)
    }
  }

  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.pharmacyFormRegistration.controls.checkeddays;
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
    }


  }
  get f() { return this.pharmacyFormRegistration.controls; }

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

    this.shopcatarray = this.pharmacyFormRegistration.controls.userType.value;
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    if (this.pharmacyFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      console.log(this.pharmacyFormRegistration.getError);

      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("medicine_type", this.mtype)
      this.formData.append("pharmacy_name", this.pname.toUpperCase())
      this.formData.append("license", this.plic)
      this.formData.append("shop_address", this.paddress)
      this.formData.append("landline", this.pln)
      this.formData.append("shop_phone", this.pphn)
      this.formData.append("open_time", this.potime)
      this.formData.append("clos_time", this.pctime)
      this.formData.append("ownername", this.oname)
      this.formData.append("shopdiscount", this.dpercent)
       // this.formData.append("open_time", "10")
      // this.formData.append("clos_time", "50")
      this.formData.append("owner_phone", this.omob)
      this.formData.append("contactname", this.cpname)
      this.formData.append("contact_phone", this.cpphn)
      this.formData.append("show", this.showorhide)
      this.formData.append("state", this.status)
      this.formData.append("purch_percentage", this.ppercent)
      this.formData.append("upload", this.currentphoto)
      this.formData.append("username", this.username)
      this.formData.append("password", this.password)

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
     console.log(this.formData);

     
     
      this.easydealservice.updatemedicalshop(this.formData,this.pharmacyid).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);
          this.formData.delete;
          this.router.navigate(['/pharmacy']);
          this.toaster.success("Medical Shop Added Successfully")
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

      img.src = window.URL.createObjectURL(this.files);
      reader.readAsDataURL(this.files);
      reader.onload = () => {
        setTimeout(() => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;

          window.URL.revokeObjectURL(img.src);
          console.log(width + '*' + height);
          if (width !== 100 && height !== 100) {
            this.isvalidphoto = true;
            console.log(width, height)
            this.toaster.error('photo should be 100*100 size');

            // form.reset();
          } else {
            this.isvalidphoto = false;
            console.log(width, height)
            // this.imgURL = reader.result;
            this.currentphoto = this.files.item(0);

          }
        }, 2000);
      };
    }
  }

}