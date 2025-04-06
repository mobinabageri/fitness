import { Pipe, PipeTransform } from '@angular/core';
import *as moment from 'jalali-moment';

@Pipe({
  name: 'persianDate'
})
export class PersianDatePipe implements PipeTransform {

  transform(value:Date): string {
   let persianDate=moment.default(value).locale('fa').format('HH:mm:ss_YYYY/MM/DD  ');
return persianDate
  }

}
