import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalizado' // nombre del pipe
})

export class CapitalizadoPipe implements PipeTransform {
    // transform(value: string, ...args: any[]): string {
    transform(value: string, capitalizar: boolean = true): string {
        value = value.toLocaleLowerCase();
        // tslint:disable-next-line: prefer-const
        let nombres = value.split(' ');
        if (capitalizar) {
        // tslint:disable-next-line: forin
            for (let i in nombres) {
                nombres[i] = nombres[i][0].toLocaleUpperCase() + nombres[i].substring(1);
            }
        } else{
            nombres[0] = nombres[0][0].toLocaleUpperCase() + nombres[0].substring(1);
        }

        return nombres.join(' ');
    }
}
