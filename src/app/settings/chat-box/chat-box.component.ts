import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  displayedColumns = ['location', 'messages','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getallmessages();
  }

  getallmessages()
  {
this.easydeelservice.getmessages().subscribe(
  data=>{
let s=[];
s=data['data'];
this.dataSource.data=s;
  },
  error=>{
    console.log(error);
    
    this.toastr.error()
  })
  // edit(s)
  // {
  //   sessionStorage.setItem("gmenu",JSON.stringify(s));
  //   this.router.navigate(['/editchatbox']);
  // }
  }
  delete(r){
    this.easydeelservice.deleteChatMessage(r._id).subscribe(
      data =>{
        this.toastr.success("Delete Message");
        this.ngOnInit();
      },
      error =>{
        
      } 
    )
  }
}