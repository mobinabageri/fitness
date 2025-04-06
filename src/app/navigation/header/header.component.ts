import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit,OnDestroy {
 @Output() sideToggle=new EventEmitter<void>();
 isAuth!:boolean;
 subcription!:any;
 constructor(private authservice:AuthService){};

ngOnInit(): void {
 this.subcription= this.authservice.authChanges.subscribe(statusr =>{
this.isAuth=statusr
  })
}
ngOnDestroy(): void {
  this.subcription.unsubscribe();
}


  sidebartoggle(){
    this.sideToggle.emit()
  }
  logute(){
     this.authservice.loguot()
  }

}
