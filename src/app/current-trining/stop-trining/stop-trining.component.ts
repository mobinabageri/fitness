import { Component ,Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-stop-trining',
  templateUrl: './stop-trining.component.html',
  styleUrl: './stop-trining.component.css'
})
export class StopTriningComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public passedData:any ){}

}
