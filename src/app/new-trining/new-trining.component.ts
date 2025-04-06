import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../trining/training.service';
import { trining } from '../trining/trining.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-trining',
  templateUrl: './new-trining.component.html',
  styleUrl: './new-trining.component.css'
})
export class NewTriningComponent implements OnInit
{
  arrayTraining!:trining[];
  constructor(private training:TrainingService){}
  ngOnInit() {
   this.arrayTraining=this.training.getExercises();
   console.log(this.arrayTraining);
   
  }

  
  onstarttrining(form:NgForm){
    
    
   this.training.startTraining(form.value.name)

  }
}
