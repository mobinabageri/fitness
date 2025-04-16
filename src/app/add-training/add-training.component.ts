import { Component, Inject, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TrainingService } from '../trining/training.service';
@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrl: './add-training.component.css'
})
export class AddTrainingComponent {
  constructor(private servicetraining:TrainingService){}

  addTraining(form:NgForm){
    const addtraining={
    name:form.value.name,
    duration:form.value.duration,
    calories:form.value.calories

    }
   
    this.servicetraining.addTraining(addtraining as any);
    form.resetForm();


  }
}
