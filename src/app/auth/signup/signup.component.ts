import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal} from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../auth.service';
import { UIservice } from '../../shared/UI.service';
import {  subscribeOn, Subscription } from 'rxjs';
// interface User{
//   id:number
//   fullname:string,
//   email:string,
//   password:string,
//   birthday:string
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  
})
export class SignupComponent implements OnInit,OnDestroy {

  isLoading:boolean=false;
  loadingsub!:Subscription;
constructor(private authservice:AuthService,private uiservice:UIservice){
  
}
  ngOnDestroy(): void {
  this.loadingsub.unsubscribe()
  }

ngOnInit(): void {
this.loadingsub=  this.uiservice.loading.subscribe((isload)=>{
    this.isLoading=isload;
  })
}

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  
  addUser(form:NgForm){
this.authservice.regiesterUser({
  email:form.value.email,
  password:form.value.password
})


  }


}
