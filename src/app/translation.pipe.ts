import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'completed' :
        return 'تکمیل شده';
        case 'canceled':
          return 'لغو شده';
          default: return value
    }

  }

}
