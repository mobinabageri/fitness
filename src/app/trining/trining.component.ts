import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';

@Component({
  selector: 'app-trining',
  templateUrl: './trining.component.html',
  styleUrl: './trining.component.css'
})
export class TriningComponent implements OnInit{
  constructor(private serviceTraining :TrainingService){}
 startNewTrining=false;

 
ngOnInit(): void {
  this.serviceTraining.Exercisechange.subscribe(ex =>{
if(ex){
this.startNewTrining=true
}else{
  this.startNewTrining=false
}

  })
}

}
