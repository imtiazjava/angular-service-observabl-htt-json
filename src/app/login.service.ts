import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { IUser } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   public users=[];
   constructor(private http:HttpClient){
       this.getUserLoginDetails().subscribe((data)=>this.users=data);
   }

   getUserLoginDetails():Observable<IUser[]>{
      return this.http.get<IUser[]>("../assets/data/userdata.json");
      
   }
   
  checkUserNameAndPassword(username:string,password:string):boolean{
         /*this.getUserLoginDetails().subscribe((value)=>{
            value.forEach((obj,index)=>{
               console.log(obj)
            })
         });*/
         //console.log(this.users);

         //validation code
         var flag=0;
         for(var i=0;i<this.users.length;i++){
              if(this.users[i].username==username && this.users[i].password==password){
                flag++;
              }
         }
         if(flag==1)
         return true;
         else
         return false;
  } 


}
