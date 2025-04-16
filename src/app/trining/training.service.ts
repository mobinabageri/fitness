import { Injectable, OnInit } from '@angular/core';
import { trining } from './trining.model';
import { filter, map, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import {AuthService} from '../auth/auth.service'

@Injectable({
  providedIn: 'root'
})
export class TrainingService implements OnInit {
  private runningTraining!: trining | null;
  Exercisechange = new Subject<trining | null>();
  Exerciseschange = new Subject<trining[] | null>();
  finishedExercises = new Subject<trining[]>();
  //تمرینات جدید
  private Exercises: trining[] = [];

  constructor(private db: AngularFirestore,private authService:AuthService) {


  }
  ngOnInit(): void {
   
  }


  featchExercises() {
    this.db.collection('exercises').snapshotChanges()
      .pipe(map((docArray) => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: (doc.payload.doc.data() as any).name,
            duration: (doc.payload.doc.data() as any).duration,
            calories: (doc.payload.doc.data() as any).calories,

          }
        });

      })).subscribe((exercises :trining[]) => {
        this.Exercises=exercises;
        this.Exerciseschange.next([...this.Exercises])
      })

    


  }
  startTraining(id: string) {

     this.runningTraining=this.Exercises.find(ex=>ex.id==id)!
    ;

     this.Exercisechange.next({ ...this.runningTraining })


  }

  getRunningExercise() {
    return { ...this.runningTraining }
  }

  completedtraining() {
  const userId=this.authService.getCurrentUserId()
    
    this.addToDatabase({ ...this.runningTraining!, date: new Date().toString(), state: 'completed',userId:userId! });
    this.runningTraining = null;
    this.Exercisechange.next(null)


  }
  canceledtraining(progress: number) {
    const userId=this.authService.getCurrentUserId();
    console.log(userId)
    this.addToDatabase({
      ...this.runningTraining!, date: new Date().toString(),
      state: 'canceled',
      duration: Math.round(this.runningTraining!.duration * (progress / 100)),
      calories: this.runningTraining!.calories * (progress / 100),
      userId:userId!
    });
    this.runningTraining = null;
    this.Exercisechange.next(null)

  }

  featchCompletedOrCanceldExercise() {
    this.db.collection('finishedOrCanceld').valueChanges().subscribe((exercises)=>{
    let  exercise=exercises.filter((ex:any)=>ex.userId==this.authService.getCurrentUserId())
      this.finishedExercises.next([...exercise as trining[]])
    })
  }

  
private addToDatabase(exercise: trining) {
  this.db.collection('finishedOrCanceld').add(exercise);

}

addTraining(TrainingNew:trining){
  this.db.collection('exercises').add(TrainingNew);
 

}

}