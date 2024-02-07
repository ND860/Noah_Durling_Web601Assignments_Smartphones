import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'types',
  standalone: true
})
export class TypesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
