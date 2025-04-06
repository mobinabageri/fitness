import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 @Output() sideClose=new EventEmitter<void>();
 isAuth!:boolean;
 subcription!:any;
 constructor(private authservice:AuthService){

 }
  sidebarclose(){
    this.sideClose.emit()
  }
  ngOnInit(): void {
    this.subcription= this.authservice.authChanges.subscribe(statusr =>{
   this.isAuth=statusr
     })
   }
   ngOnDestroy(): void {
     this.subcription.unsubscribe();
   }
   logute(){
    this.sidebarclose()
    this.authservice.loguot()
 }
}
