import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-price-updator',
  templateUrl: './add-price-updator.component.html',
  styleUrls: ['./add-price-updator.component.css']
})
export class AddPriceUpdatorComponent implements OnInit {
  addpriceupdatorFormRegistration: FormGroup;
  submitted = false;
  isLoading = false;
  button = 'Submit';
  sname ="";
  sprice ="";
  amount;
  percentage;
  disable = false;
  disabled = false;
  results:any=[];
  
  constructor(private formbuilder:FormBuilder,private easydealservices:EasydealService,private router:Router,private toastr:ToastrService) { }


  ngOnInit() {
    this.addpriceupdatorFormRegistration = this.formbuilder.group(
      {
        sname: ['', Validators.required],
        sprice: ['', Validators.required],
        amount: ['', Validators.required],
        // percentage: [''],
        
      })
      this.getallshops();
  }
  get f() { return this.addpriceupdatorFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';

    // stop here if form is invalid
    if (this.addpriceupdatorFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "amount":parseInt(this.amount),
        "type":parseInt(this.sprice)

      }
      this.easydealservices.updateprice(this.sname,req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';

          this.toastr.success("Price Updated successfully");
        
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';

        }
      )
    }
  }

//  onkeydown(amount) {
//     this.disabled = true;
//     if (amount == '') {
//       this.disabled = false;
//       this.addpriceupdatorFormRegistration.get('percentage').enable();

//     }
//     else {
//       this.disabled = true;
//       this.addpriceupdatorFormRegistration.get('percentage').disable();

//     }
//   }
  onkeydown1(percentage) {
    this.disable = true;
    if (percentage == '') {
      this.disable = false;
      this.addpriceupdatorFormRegistration.get('amount').enable();

    }
    else {
      this.disable = true;
      this.addpriceupdatorFormRegistration.get('amount').disable();

    }
  }

  getallshops()
  {
    this.easydealservices.getshop().subscribe(
      data =>{
        console.log(data);
        this.results =data;
      
      },
      error =>{
        console.log(error);
      }
    )
  }
}