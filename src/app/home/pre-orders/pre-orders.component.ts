import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from 'src/app/_services/easydeal.service';
import { ViewPreOrdersComponent } from './view-pre-orders/view-pre-orders.component';

@Component({
  selector: 'app-pre-orders',
  templateUrl: './pre-orders.component.html',
  styleUrls: ['./pre-orders.component.css']
})
export class PreOrdersComponent implements OnInit {

  displayedColumns = ['orderid', 'bookingdate', 'customernameandaddress','contactno', 'deliverydate','deliverytime','status','action'];
  dataSource = new MatTableDataSource();

  // @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  constructor(private easydeelservice:EasydealService,private dialog:MatDialog,
    private toaster:ToastrService) { }

  ngOnInit() {
    this.getallPreorders();
  }

  getallPreorders()
  {
    this.easydeelservice.getallpreorders().subscribe(
      data =>{
        let arr :any =[];
        arr = data['data'];
        this.dataSource.data = arr;
      },
      error =>{

      }
    )
  }
  view(s){
    const dialogRef = this.dialog.open(ViewPreOrdersComponent, {
      data: s,
      width:"500px",
      height:"auto"
    }
    );
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}