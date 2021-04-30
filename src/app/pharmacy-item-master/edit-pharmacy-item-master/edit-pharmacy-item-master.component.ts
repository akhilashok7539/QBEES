import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-pharmacy-item-master',
  templateUrl: './edit-pharmacy-item-master.component.html',
  styleUrls: ['./edit-pharmacy-item-master.component.css']
})
export class EditPharmacyItemMasterComponent implements OnInit {
  pharmacyitemmasterFormRegistration: FormGroup;
  submitted = false;

  mtype:any="";
  sname = "";
  cname = "";
  iname;
  des;
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
  generalmenu;
  id;
  isLoading = false;
  button = 'Submit';
  editcategory:any=[];
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
    this.editcategory = JSON.parse(sessionStorage.getItem("pharmacy-item-master"));
    // this.sname = this.generalmenu.shop_id['_id']
    this.mtype = this.editcategory['medicinetype']
    this.id = this.editcategory['_id']
    this.cname = this.editcategory.category_id['_id']
    this.iname = this.editcategory['name']
    // this.status = this.generalmenu['state']
   

    this.getallShop();
    this.getallcategorytype();
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
    this.easydeelservices.getallgeneralcategory().subscribe(
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
      this.easydeelservices.edipharmacyitemmaster(this.formData, this.id).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("Edit Pharmacy Itemmaster updated successfully");
          this.router.navigate(['/pharmacy-item-master']);
        },

        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.error("Edit Pharmacy Itemmaster updated unsuccessful");
        }
      )
    }
  }
}