import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {MatDialog} from '@angular/material/dialog'
import { StopTriningComponent } from './stop-trining/stop-trining.component';
import { Router ,ActivatedRoute} from '@angular/router';
import { TrainingService } from '../trining/training.service';
import { trining } from '../trining/trining.model';

@Component({
  selector: 'app-current-trining',
  templateUrl: './current-trining.component.html',
  styleUrl: './current-trining.component.css'
})
export class CurrentTriningComponent implements OnInit{
  constructor(private dialog:MatDialog,private roter:Router,private activate:ActivatedRoute,private service:TrainingService){}
progress=0;
intervalid!:any;
runtraining!:trining;


ngOnInit(): void {
  this.startOrResoumtrining();

}
startOrResoumtrining(){
  const incremant=this.service.getRunningExercise().duration! /100 *1000  ;
  console.log(incremant);
  
  this.intervalid = setInterval(()=>{
    this.progress+=1;
    if(this.progress >=100){
      this.service.completedtraining()
      clearInterval(this.intervalid)
    }
 },incremant
 )
}

onstop(){
  clearInterval(this.intervalid)
 const dialogRef= this.dialog.open(StopTriningComponent,{data:{progress : this.progress}});
 dialogRef.afterClosed().subscribe(result => {
 if(result){
  this.service.canceledtraining(this.progress)
 }
 else{
this.startOrResoumtrining()
 }

 })
}
}
