import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-pharmacy-item-master',
  templateUrl: './add-pharmacy-item-master.component.html',
  styleUrls: ['./add-pharmacy-item-master.component.css']
})
export class AddPharmacyItemMasterComponent implements OnInit {

  pharmacyitemmasterFormRegistration: FormGroup;
  submitted = false;

  mtype:any="";
  cname = "";
  iname;
  iimage;
  // showorhide;
  // status;
  // mctype="";
  shops;
  category;
  // mstyle="";
  formData = new FormData();
  files;
  currentphoto;
  isLoading = false;
  button = 'Submit';
  cat:any=[];
  constructor(private formbuilder: FormBuilder, private easydeelservices: EasydealService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.pharmacyitemmasterFormRegistration = this.formbuilder.group(
      {
        // sname: ['', Validators.required],
        mtype:['', Validators.required],
        cname: ['', Validators.required],
        iname: ['', Validators.required],
        iimage: ['', Validators.required],
        // showorhide: ['', Validators.required],
        // status: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
  this.getallpharmacycategory();
  }
  get f() { return this.pharmacyitemmasterFormRegistration.controls; }
  additemimage(event) {

    this.files = event.target.files;
    this.currentphoto = this.files.item(0);
  }
  getallShop() {
    this.easydeelservices.getshop().subscribe(
      data => {
        console.log(data);
        this.shops = data;

      },
      error => {
        console.log(error);
      }
    )
  }
  getallcategorytype() {
    this.easydeelservices.getpharmacycategroy().subscribe(
      data => {
        let result: any = []
        this.category = data;

      },
      error => {

      },
    )

  }
getallpharmacycategory(){
  this.easydeelservices.getpharmacycategroy().subscribe(
    data =>{
this.cat=data;
    },
    error=>{

    }
  )
}

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.pharmacyitemmasterFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("name", this.iname) ;
      this.formData.append("upload", this.currentphoto);
      this.formData.append("medicinetype",this.mtype);
      this.formData.append("category_id", this.cname);
      this.formData.append("status", "Active");

      // this.formData.append(""),this.sname
      this.easydeelservices.addpharmacyitemmaster(this.formData).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("Pharmacy Item Master added successfully");
          this.router.navigate(['/pharmacy-item-master']);
        },

        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.error("Pharmacy Item Master added unsuccessful");
        }
      )
    }
  }
}