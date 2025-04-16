import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { TrainingService } from '../trining/training.service';
import { trining } from '../trining/trining.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, Subscriber } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-new-trining',
  templateUrl: './new-trining.component.html',
  styleUrl: './new-trining.component.css'
})
export class NewTriningComponent implements OnInit,OnDestroy
{
  Exercises!:trining[];
  subcription!:Subscription;
  constructor(private training:TrainingService,private db:AngularFirestore){}
  ngOnDestroy(): void {
 this.subcription.unsubscribe();

  }
  ngOnInit() {

  this.subcription= this.training.Exerciseschange.subscribe( (exrcise)=>{this.Exercises=exrcise!});
  this.training.featchExercises()
   
   
  }

  
  onstarttrining(form:NgForm){
    
    
   this.training.startTraining(form.value.name)

  }
}
