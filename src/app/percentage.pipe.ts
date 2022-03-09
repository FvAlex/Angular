import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage'
})
export class PercentagePipe implements PipeTransform {

  transform(value: number | undefined, percentage: number | undefined = 0): number |void {
    if(value != undefined){
      var result = (value*(percentage/100));
      return Math.round(result);
    }
    

  }

}
