import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: any, limit?: number): any {
    if (!value) {
      return null;
    }

    const currentLimit = limit ? limit : 60;

    return value.substring(0, currentLimit) + '...';
  }
}
