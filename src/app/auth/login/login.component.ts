import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIservice } from '../../shared/UI.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit,OnDestroy {
isLoading:boolean=false;
  loadingsub!:Subscription;

constructor(private authService:AuthService , private uiservice:UIservice){}
  ngOnDestroy(): void {
    this.loadingsub.unsubscribe()
  }
  ngOnInit(): void {
   this.loadingsub= this.uiservice.loading.subscribe((isload)=>{
      this.isLoading=isload;
    })
  }

 hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginuser(user:NgForm){
this.authService.login({
  email:user.value.email,
  password:user.value.password 
})
  }
}
