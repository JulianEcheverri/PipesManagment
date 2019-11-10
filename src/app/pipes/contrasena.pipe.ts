import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    // tslint:disable-next-line: prefer-const
    let nombreSplit = value.split(' ');
    if (activar) {
      // tslint:disable-next-line: forin
      for (let i in nombreSplit) {
        nombreSplit[i] = '*';
      }
    }

    return nombreSplit.join('');
  }

}
