import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToTime',
  standalone: false
})
export class NumberToTimePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return `${Math.floor(value / 60)} minutes ${value % 60} secondes`;
  }

}
