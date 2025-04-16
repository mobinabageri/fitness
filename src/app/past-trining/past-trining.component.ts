import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TrainingService } from '../trining/training.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { trining } from '../trining/trining.model';
import {MatPaginator} from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-past-trining',
  templateUrl: './past-trining.component.html',
  styleUrl: './past-trining.component.css'
})
export class PastTriningComponent implements AfterViewInit,OnInit,OnDestroy {
datasource=new MatTableDataSource<trining>();
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) pagenator! :MatPaginator;
private finishedExercisesSub!:Subscription;


  displayedColumns:string[]=['name','duration','calories','date','state'];
  constructor( private service :TrainingService,private authService:AuthService){
    authService.getCurrentUserId()
  }
  ngOnInit(): void {
  this.finishedExercisesSub=   this.service.finishedExercises.subscribe((exercises:trining[])=>{
    this.datasource.data=exercises;
    
  }  )
   this.service.featchCompletedOrCanceldExercise()
  }
  ngAfterViewInit(): void {
   this.datasource.sort=this.sort
   this.datasource.paginator=this.pagenator
  }
  
  filtertable(filterValue :Event){
    let value =(filterValue.target as HTMLInputElement).value;
this.datasource.filter=value.trim().toLowerCase()

  }

ngOnDestroy(): void {
  this.finishedExercisesSub.unsubscribe();
}
  
}
