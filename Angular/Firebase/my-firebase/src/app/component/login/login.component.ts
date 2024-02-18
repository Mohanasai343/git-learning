import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email:string = "";
  password:string="";

  constructor(private auth : AuthService){}

    ngOnInit(): void {

    }
    
    login(form: NgForm){
      if(this.email == ""){
        alert("Please enter email");
        return;
      }
      if(this.password == ""){
        alert("Please enter password");
        return;
      }

      this.auth.login(this.email,this.password);
      this.email = "";
      this.password="";

    }
   
    openRegister(){
      
    }
}