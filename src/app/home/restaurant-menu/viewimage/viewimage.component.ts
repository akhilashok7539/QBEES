import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.css']
})
export class ViewimageComponent implements OnInit {
  apiUrl;
  id;
  constructor(@Inject(MAT_DIALOG_DATA) data, private easydeelservice:EasydealService,
  private toaster:ToastrService,
  private dialogRef: MatDialogRef<ViewimageComponent>) 
  { 
    this.id = data;

  }

  ngOnInit() {
    this.apiUrl = "https://dashboard.qbees.in/";
  }

}
