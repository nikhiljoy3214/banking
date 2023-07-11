import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  data="Happy Banking with us.."
  pdata="Enter account number"
  acno:any=""

  login(){
    alert("Login clicked")
  }

  // $EVENT

  accnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);

    // console.log(event.target.value);

  }

  passDisplay(event:any){
    console.log(event.target.value);

  }

}
