import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   uname:string="";
   pwd:string="";
   statusMessage:string="";
   
   constructor(private loginS:LoginService){
           console.log(this.loginS);
        console.log("At the creation  time angular will inject the service")
   }

   loginValidation(){
        if(this.loginS.checkUserNameAndPassword(this.uname,this.pwd)==true){
            this.statusMessage="SUCESSFULLY LOGIN";
        }else{
           this.statusMessage="INVALID USERNAME AND PASSWORD";
        }
   }
}
