import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-chat-box',
  templateUrl: './add-chat-box.component.html',
  styleUrls: ['./add-chat-box.component.css']
})
export class AddChatBoxComponent implements OnInit {
  addchatboxFormRegistration: FormGroup;
  submitted = false;
  isLoading = false;
  button = 'Submit';

  location;
  message;
  results: any = [];
  // cimage;
  // des;  
  // mtype="";
  // mctype="";
  // mstyle="";

  constructor(private formbuilder: FormBuilder,private router:Router,
     private easydealservices: EasydealService,private toaster:ToastrService) { }

  ngOnInit() {
    this.addchatboxFormRegistration = this.formbuilder.group(
      {
        location: ['', Validators.required],
        message: ['', Validators.required],
        // cimage:['', Validators.required],
        // des: ['', Validators.required],
        // mtype: ['', Validators.required],
        // mctype: ['', Validators.required],
        // mstyle: ['', Validators.required],
      })
    this.getalllocations();
  }
  getalllocations() {
    this.easydealservices.getalllocations().subscribe(
      data => {

        this.results = data;
        // this.dataSource.data = results;

      },
      error => {
        console.log(error);

      }
    )
  }
  get f() { return this.addchatboxFormRegistration.controls; }

  submit() {
    this.submitted = true;
    this.isLoading = true;
    this.button = 'Processing';
    // stop here if form is invalid
    if (this.addchatboxFormRegistration.invalid) {
      this.isLoading = false;
      this.button = 'submit';
      return;
    }
    else {
      this.isLoading = true;
      this.button = 'Processing';
      let req = {
        "location": this.location,
        "message": this.message
      }
      this.easydealservices.addmessages(req).subscribe(
        data => {
          this.isLoading = false;
          this.button = 'Submit';

          this.toaster.success("messages added successfully");
          this.router.navigate(['/chatbox']);
        },
        error => {
          this.isLoading = false;
          this.button = 'Submit';
         this.toaster.error(error.error.responce);
          
        })
    }
  }
}