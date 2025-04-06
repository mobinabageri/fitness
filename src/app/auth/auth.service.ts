import { Injectable } from '@angular/core';
import { User } from './user.model';
import { authData } from './auth.model';
import {Subject} from 'rxjs'
import { fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private roter:Router){}

  authChanges=new Subject<boolean>();
 private user! :User |null;

 regiesterUser(authData:authData){
  this.user={
    
   email:authData.email,
   userId :Math.round(Math.random())

  }
this.authChanges.next(true);
this.roter.navigate(['/trining'])

 }
 login(authData:authData){
  this.user={
    
   email:authData.email,
   userId :Math.round(Math.random())

  }
  this.authChanges.next(true);
  this.roter.navigate(['/trining'])


 }
  
loguot(){
  this.authChanges.next(false)

  this.user=null;
  this.roter.navigate(['/login'])


}

getUser(){
return {...this.user}
}
isAuth(){
  return this.user !=null
}
  
}
