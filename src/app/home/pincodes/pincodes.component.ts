import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EasydealService } from 'src/app/_services/easydeal.service';

@Component({
  selector: 'app-pincodes',
  templateUrl: './pincodes.component.html',
  styleUrls: ['./pincodes.component.css']
})
export class PincodesComponent implements OnInit {
  displayedColumns = ['id', 'location','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservices:EasydealService,private router:Router) { }

  ngOnInit() {
    this.getalllocations();
  }
getalllocations(){
  this.easydealservices.getalllocations().subscribe(
    data =>{
      console.log(data);
      let results:any =[];
      results = data;
      this.dataSource.data = results;
      
    },
    error =>{
      console.log(error);
      
    }
  )
}
edit(s)
{
  sessionStorage.setItem("location",JSON.stringify(s));
  this.router.navigate(['/editpincodes']);
}
view(s){
  sessionStorage.setItem("slocation",JSON.stringify(s));
  this.router.navigate(['/view-sublocations']);
}
}
