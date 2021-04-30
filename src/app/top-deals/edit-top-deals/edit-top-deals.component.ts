import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-edit-top-deals',
  templateUrl: './edit-top-deals.component.html',
  styleUrls: ['./edit-top-deals.component.css']
})
export class EditTopDealsComponent implements OnInit {
  
  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private toaster: ToastrService,
     private router: Router) { }

     ngOnInit() {
     
    }
   
  
  }
  