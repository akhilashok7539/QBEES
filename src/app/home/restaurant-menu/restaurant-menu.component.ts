import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
import { ViewimageComponent } from './viewimage/viewimage.component';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  displayedColumns = ['id', 'menuname', 'menuimage', 'action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  options: any = "";
  results: any = [];
  apiUrl;
  page: number = 0;
  limit: number = 25;
  // skip: number = 0;
  totalLength: number;
  pageIndex: number = 0;
  // pageLimit: number[] = [5, 10];
  status;
  pagenumber = 0;
  courcetypes:any =[];
  options2:any = '';
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydealservice: EasydealService, public dialog: MatDialog,
    private toastr: ToastrService, private router: Router) { }

  ngOnInit() {
    this.status = JSON.parse(localStorage.getItem("loginstatus"));

    this.apiUrl = "https://dashboard.qbees.in/";
    this.getallmenu();

    console.log(status);
  }

  getallmenu() {

    this.easydealservice.getallmenubypagination(this.page).subscribe(

      data => {
        console.log(data);
        this.results = data['menu'];
        this.dataSource.data = this.results;
        let totalelements = data['totalPages'] * 25;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {
        console.log(error);

      }
    )
  }
  applyFilter(filterValue) {
    // filterValue = filterValue.trim(); // Remove whitespace
    // filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
    console.log(filterValue);
    if(this.options2 =="")
    {

      if(filterValue == '')
      {
        this.getallmenu();
      }
      else{
        this.easydealservice.searchresmenu(filterValue).subscribe(
          data =>{
            this.results = data['menu'];
            this.dataSource.data = this.results;
            let totalelements = data['totalPages'] * 25;
            console.log(totalelements)
            this.totalLength = totalelements;
          },
          error =>{
  
          }
        )
      }
     

    }
    else{
      
      if(filterValue == '')
      {
        this.getallmenu();
      }
      else{
        this.easydealservice.searchresmenubycourcetype(this.options2,filterValue).subscribe(
          data =>{
            this.results = data['menu'];
            this.dataSource.data = this.results;
            let totalelements = data['totalPages'] * 25;
            console.log(totalelements)
            this.totalLength = totalelements;
          },
          error =>{
  
          }
        )
      }

    }
    

  }


  active(s) {
    console.log(s);
    // console.log("curent page index"+this.pageIndex);
    
    this.easydealservice.changestatusrestmenu(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        // this.ngOnInit();
        // this.changePage(event);
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);
        

      },
      error => {
        this.toastr.error("Unable to Update status");
        // this.ngOnInit();
        // this.changePage(event);
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);

      }
    )
  }
  inactive(s) {

    this.easydealservice.changestatusrestmenu(s._id).subscribe(
      data => {
        this.toastr.success("Status Updated");
        // this.ngOnInit();
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);


      },
      error => {
        this.toastr.error("Unable to Update status");
        // this.ngOnInit();
        console.log("curent numbere"+this.pagenumber);
        this.getdataforpagenumber(this.pagenumber);



      }
    )
  }
  edit(s) {
    sessionStorage.setItem("restmenu", JSON.stringify(s));

    this.router.navigate(['/edit-rest-menu']);
  }
  // selectedevent(r) {
  //   console.log(r);
  //   if (r == "m") {
  //     this.results = [
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Breakfast"
  //       },
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Lunch"
  //       },
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Dinner"
  //       },
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Starter"
  //       },
  //     ]
  //   }
  //   else if (r == "c") {
  //     this.results = [
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Veg"
  //       },
  //       {
  //         "id": "`1",
  //         "restaurantmenu": "Non-veg"
  //       },

  //     ]
  //   }
  // }
  filter1(s)
  {
    console.log(s);
    if(s == 'c')
    {
      this.getallcoursetype();
    }
  }

  getallcoursetype() {
    this.easydealservice.getallcoursetype().subscribe(
      data => {
        this.courcetypes = data;
        // this.dataSource.data = result
      },
      error => {

      },
    )

  }
  getdataforpagenumber(s)
  {
    this.easydealservice.getallmenubypagination(s).subscribe(

      data => {
        this.dataSource = new MatTableDataSource();

        console.log(data);
        this.results = data['menu'];
        this.dataSource.data = this.results;
        // this.totalLength = data['totalPages'] * 20;
        // this.totalLength = 100;
        let totalelements = data['totalPages'] * 25;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {
        console.log(error);

      }
    )
  }
  changePage(event) {
    console.log(event.pageIndex)
    this.pagenumber =event.pageIndex;
    this.easydealservice.getallmenubypagination(event.pageIndex).subscribe(

      data => {
        this.dataSource = new MatTableDataSource();

        console.log(data);
        this.results = data['menu'];
        this.dataSource.data = this.results;
        // this.totalLength = data['totalPages'] * 20;
        // this.totalLength = 100;
        let totalelements = data['totalPages'] * 25;
        console.log(totalelements)
        this.totalLength = totalelements;
      },
      error => {
        console.log(error);

      }
    )
  }
  view(s)
  {
    console.log(s);
    const dialogRef = this.dialog.open(ViewimageComponent, {
      data: s,
    
      height:"auto"
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }
}


