import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-general-menu',
  templateUrl: './add-general-menu.component.html',
  styleUrls: ['./add-general-menu.component.css']
})
export class AddGeneralMenuComponent implements OnInit {
  generalmenuFormRegistration: FormGroup;
  submitted = false;

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
  isLoading = false;
  button = 'Submit';
  constructor(private formbuilder: FormBuilder, private easydeelservices: EasydealService, private router: Router, private toastr: ToastrService) { }
  ngOnInit() {
    this.generalmenuFormRegistration = this.formbuilder.group(
      {
        // sname: ['', Validators.required],
        cname: ['', Validators.required],
        iname: ['', Validators.required],
        des: ['', [Validators.required, Validators.maxLength(50)]],
        iimage: ['', Validators.required],
        // showorhide: ['', Validators.required],
        // status: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.getallShop();
    this.getallcategorytype();
  }
  get f() { return this.generalmenuFormRegistration.controls; }
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
  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.generalmenuFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      this.formData.append("itemName", this.iname)
      this.formData.append("itm_description", this.des)
      this.formData.append("upload", this.currentphoto)
      this.formData.append("shop_id", this.sname)
      this.formData.append("generalcat_id", this.cname)
      // this.formData.append(""),this.sname
      this.easydeelservices.addgeneralitemmenu(this.formData).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.success("General menu added successfully");
          this.router.navigate(['/generalmenu']);
        },

        error => {
          this.isLoading = false;
          this.button = 'Submit';
          this.toastr.error("General menu added unsuccessful");
        }
      )
    }
  }
}