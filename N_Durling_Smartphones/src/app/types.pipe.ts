import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';
@Pipe({
  name: 'types',
  standalone: true
})
export class TypesPipe implements PipeTransform {

  transform(items: Content[], type: string): Content[] {

    return items.filter(item => this.getType(item)== type);
  }

  getType(i: Content){
      if(i.hasOwnProperty("type")==true){
        return i.type;
      }
      else
      return ''
  }
}
