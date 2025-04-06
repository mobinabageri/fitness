import { MatPaginatorIntl } from "@angular/material/paginator";


export class paginatorTranslite extends MatPaginatorIntl{
   override itemsPerPageLabel='مورد در صفحه';

   override nextPageLabel='صفحه بعد';
   override previousPageLabel='صفحه قبل';
   override firstPageLabel='رفتن به صفحه اول';
   override lastPageLabel="رفتن به صفحه آخر"

  override getRangeLabel= (page: number, pageSize: number, length: number) =>{
    const start=page*pageSize+1;
    const end =Math.min((page+1)*pageSize,length);
    return `${start}  از ${length}`
   }
}