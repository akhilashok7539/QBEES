import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-add-top-deals',
  templateUrl: './add-top-deals.component.html',
  styleUrls: ['./add-top-deals.component.css']
})
export class AddTopDealsComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private easydeelservice: EasydealService, private toaster: ToastrService, private router: Router) { }

  ngOnInit() {
   
  }
  
}
