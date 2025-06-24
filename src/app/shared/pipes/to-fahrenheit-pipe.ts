import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit',
  standalone: false
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let fahrenheit = (value * 1.8) + 32;
    return `${fahrenheit} °F`;
  }

}
