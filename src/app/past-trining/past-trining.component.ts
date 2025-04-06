import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TrainingService } from '../trining/training.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { trining } from '../trining/trining.model';
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-past-trining',
  templateUrl: './past-trining.component.html',
  styleUrl: './past-trining.component.css'
})
export class PastTriningComponent implements AfterViewInit,OnInit {
datasource=new MatTableDataSource<trining>();
  @ViewChild(MatSort) sort!:MatSort;
  @ViewChild(MatPaginator) pagenator! :MatPaginator;
  displayedColumns:string[]=['name','duration','calories','date','state'];
  constructor( private service :TrainingService){
  }
  ngOnInit(): void {
    this.datasource.data= this.service.getCompletedOrCanceldExercise()
  }
  ngAfterViewInit(): void {
   this.datasource.sort=this.sort
   this.datasource.paginator=this.pagenator
  }
  
  filtertable(filterValue :Event){
    let value =(filterValue.target as HTMLInputElement).value;
this.datasource.filter=value.trim().toLowerCase()

  }


  
}
