import { Injectable } from '@angular/core';
import { trining } from './trining.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private runningTraining!:trining |null;
  Exercisechange = new Subject<trining |null>();
  private   traininges: trining[] | null  = [{ id: 4, name: 'شنا', duration: 60, calories: 20 ,date:new Date().toDateString(),state:'canceled'},
    { id: 3, name: 'لانچ اسکوات', duration: 130, calories: 18,date:new Date().toDateString(),state:'completed'},
    { id: 2, name: 'اسکوات', duration: 180, calories: 15 ,date:new Date().toDateString(),state:'completed'}
  ];
  private Exercises: trining[] = [
    { id: 1, name: 'کرانچ', duration: 30, calories: 8 },
    { id: 2, name: 'اسکوات', duration: 180, calories: 15 },
    { id: 3, name: 'لانچ اسکوات', duration: 130, calories: 18 },
    { id: 4, name: 'شنا', duration: 60, calories: 20 },


  ];
  

  getExercises() {
    return this.Exercises.slice();

  }
  startTraining(id: number) {
   
    this.runningTraining=this.getExercises().find(ex=>ex.id==id)!
    ;
    
    this.Exercisechange.next({ ...this.runningTraining })
   
    
  }

  getRunningExercise() {
    return  {...this.runningTraining }
  }

  completedtraining() {
   

    this.traininges?.push({ ...this.runningTraining!, date: new Date().toString(), state: 'completed' });
    this.runningTraining=null;
    this.Exercisechange.next(null)  


  }
  canceledtraining(progress: number) {
   
    this.traininges?.push({ ...this.runningTraining!, date: new Date().toString(),
       state: 'canceled',
       duration: Math.round(this.runningTraining!.duration * (progress / 100)) ,
       calories:this.runningTraining!.calories * (progress / 100)});
      this.runningTraining=null;
      this.Exercisechange.next(null)    

  }

  getCompletedOrCanceldExercise(){
    return [...this.traininges!]
  }
}
