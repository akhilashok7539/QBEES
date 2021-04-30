import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EasydealService } from '../_services/easydeal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:any;
  userName:any;
  resposne:any;
  vehicleimage2:any;
  constructor(private router:Router,private Domsantizer:DomSanitizer,
    private eaydeelservice:EasydealService,private toater:ToastrService) { }

  ngOnInit() {
    // let data = "http://45.79.122.125:8080/prestige/api/unprotect/ins-report/view/825";
    //   var unnsafeimage = URL.createObjectURL(data);
    //     console.log(unnsafeimage)
    //     this.vehicleimage2 = this.Domsantizer.bypassSecurityTrustUrl(unnsafeimage);
  }

  shopadmin(){

    localStorage.setItem("loginstatus",JSON.stringify("shopadmin"));
    this.router.navigate(['/home']);
  }
  onKeydown(event)
  {
  if(event.key === 'Enter')
  {
    this.Masteradminlogin();

  }

  }
  Masteradminlogin()
  {

    let req = {
      "userName":this.userName,
      "password":this.password
    }

    this.eaydeelservice.login(req).subscribe(
      data =>{
          console.log(data)
          this.resposne = data['responce'];
          if(data['responce']=="enter valid password")
          {
            this.toater.error("Invalid Password")
          }
          else{
            
          }
          if(this.resposne['role']==1)
          {
          localStorage.setItem("loginstatus",JSON.stringify("masteradmin"));
          localStorage.setItem("userdetails",JSON.stringify(this.resposne));
          this.toater.success("Login Succesfully");


          this.router.navigate(['/home']);
          }
          else  if(this.resposne['role']==2){
            localStorage.setItem("loginstatus",JSON.stringify("locationamin"));
            localStorage.setItem("userdetails",JSON.stringify(this.resposne));
          this.toater.success("Login Succesfully");

            this.router.navigate(['/home']);
          }
          else  if(this.resposne['role']==3){
            localStorage.setItem("loginstatus",JSON.stringify("shopadmin"));
            localStorage.setItem("userdetails",JSON.stringify(this.resposne));
          this.toater.success("Login Succesfully");

            this.router.navigate(['/home']);
          }
        
      },
      error =>{
        this.toater.error(error.error['responce'])
      }
    )
 


  }
}
