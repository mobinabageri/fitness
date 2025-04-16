import { Injectable, OnInit } from '@angular/core';
import { User } from './user.model';
import { authData } from './auth.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar'
import { UIservice } from '../shared/UI.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;
  authChanges = new Subject<boolean>();
  private user!: User | null;
  private userIdSubject = new BehaviorSubject<string | null>(null);
  userId = this.userIdSubject.asObservable();


  constructor(private roter: Router, private fireauth: AngularFireAuth,private Snackbar:MatSnackBar,private uiservice:UIservice) 
  {
    this.fireauth.authState.subscribe(user => {
      if (user) {
        this.userIdSubject.next(user.uid); // ذخیره userId در BehaviorSubject
      } else {
        this.userIdSubject.next(null); // کاربر وارد نشده است
      }
    }); 
    
   }
  

  regiesterUser(authData: authData) {
    //   this.user={

    //    email:authData.email,
    //    userId :Math.round(Math.random())

    //   }
    // this.authChanges.next(true);
    this.uiservice.loading.next(true)
    this.fireauth.createUserWithEmailAndPassword(authData.email, authData.password)
    .then(res => {
       this.successfully()
       this.uiservice.loading.next(false)
    })
    .catch(error=>{
      this.Snackbar.open('ثبت نام شما با مشکل مواجه شد ','Close',{duration: 4000})
      this.uiservice.loading.next(false)
      this.catching()
    });


  }
  login(authData: authData) {
    // this.user = {

    //   email: authData.email,
    //   userId: Math.round(Math.random())

    // }
    this.uiservice.loading.next(true)
this.fireauth.signInWithEmailAndPassword(authData.email, authData.password).then(res=>{ this.uiservice.loading.next(false)
this.successfully()
  
}).catch(error=>{
  this.Snackbar.open(' ورود شما با مشکل مواجه شد ','Close',{duration: 4000})
  this.uiservice.loading.next(false);
  this.catching()
});


  }

  loguot() {
    this.fireauth.signOut()
    this.authChanges.next(false)
    this.isAuthenticated = false;

    this.user = null;
    this.roter.navigate(['/login'])


  }

  getUser() {
    return { ...this.user }
  }
  isAuth() {
    
    return this.isAuthenticated;
  }


  successfully(){
    this.authChanges.next(true);
  this.roter.navigate(['/trining'])
  this.isAuthenticated = true; 
  }
  catching(){
    this.authChanges.next(false);
  this.roter.navigate(['/signup'])
  this.isAuthenticated = false; 
  }

  getCurrentUserId(): string | null {
    
    return this.userIdSubject.value;
  }
}
