import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  categoryFormRegistration: FormGroup;
  submitted = false;

  cat_id;
  files;
  currentphoto;
  cname;
  mtype = "";
  cimage;
  showorhide = "Show";
  status = "Active";
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";
  formData = new FormData();
  getcatdetails;
  isLoading = false;
  button = 'Submit';
  sessiondayssRepat;
  repeatsessiondays: any = [];
  value;
  locations: any = [];
  disbaledvalue = false;
  disabled = false;
  catloations: any = [];
  arr:any=[];
  condtionyesorno = "no";
  constructor(private formbuilder: FormBuilder, private easydealservice: EasydealService, private router: Router) { }

  ngOnInit() {
    this.categoryFormRegistration = this.formbuilder.group(
      {
        cname: ['', Validators.required],
        mtype: ['', Validators.required],
        cimage: [''],
        showorhide: ['', Validators.required],
        status: ['', Validators.required],
        check: [''],
        checkeddays: this.formbuilder.array([]),
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.getcatdetails = JSON.parse(sessionStorage.getItem("cat"));
    this.cname = this.getcatdetails['category_name'];

    this.mtype = this.getcatdetails['category_menutype'];
    this.showorhide = this.getcatdetails['category_show'];
    this.status = this.getcatdetails['category_state'];
    this.cat_id = this.getcatdetails['_id']
    this.catloations = this.getcatdetails['locationId'];
    // this.sessiondayssRepat = this.catloations;
    // console.log(this.sessiondayssRepat)
    this.getalllocations();

    for (let i = 0; i < this.catloations.length; i++) {

        this.arr.push(this.catloations[i]['_id'])    

    }
    console.log(this.arr);
    this.sessiondayssRepat = this.arr;
  //  const email =  <FormArray>this.categoryFormRegistration.controls.checkeddays;
  // email.push(this.arr);
    if (this.cname == 'RESTAURANT') {
      console.log("here");

      this.disabled = true;
      this.categoryFormRegistration.get('cname').disable();

    }
  }

  get f() { return this.categoryFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.categoryFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'Submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("category_name", this.cname.toUpperCase())
      this.formData.append("show", this.showorhide)
      this.formData.append("category_menutype", this.mtype)
      this.formData.append("state", this.status)
      this.formData.append("upload", this.currentphoto)
      for (let i = 0; i < this.sessiondayssRepat.length; i++) {
        this.formData.append("locationId", this.sessiondayssRepat[i])

      }

      this.easydealservice.editcategory(this.formData, this.cat_id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          console.log(data);

          this.router.navigate(['/home']);
          this.formData.delete;
          // window.location.reload();
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

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);

    //  console.log(this.currentFoto)
  }
  getalllocations() {
    this.easydealservice.getalllocations().subscribe(
      data => {
        console.log(data);

        this.locations = data;
        // this.repeatsessiondays.push(this.alldata);
        this.repeatsessiondays = this.locations;


      },
      error => {
        console.log(error);

      }
    )
  }
  onChange(time: string, isChecked: boolean) {
    this.sessiondayssRepat = [];
    const emailFormArray = <FormArray>this.categoryFormRegistration.controls.checkeddays;
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
}