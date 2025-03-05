import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: string[], args: string): string[] {
    
    if(!args || args.length < 3 ) return values


    let result:string[] = []

    for ( const value of values ) {
     if(value.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1 ){
      result = [ ...result , value]
     }
      
    }
    return result
  }

}
