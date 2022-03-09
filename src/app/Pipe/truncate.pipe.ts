import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})

export class TruncatePipe implements PipeTransform {

  transform(value: string, number: number): String {
  
    return (value.length < number) ?  value : value.slice(0,number) + "..."

  }

}
