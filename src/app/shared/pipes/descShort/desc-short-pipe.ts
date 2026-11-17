import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descShort',
})
export class DescShortPipe implements PipeTransform {
  transform(description: string|null, limit: number = 50): string {
    if(!description){
      return "No description available"
    }
    if(description.length<= limit){
      return description;
    }
    return description.substring(0, limit) + "...";
  }
}
