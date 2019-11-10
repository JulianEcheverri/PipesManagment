import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// se crea este pipe para resolver url de forma segura
// angular bloquea el url, por ejemplo un tag de video


@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private dom: DomSanitizer) {
  }

  transform(value: string, url: string): any {
    return this.dom.bypassSecurityTrustResourceUrl(url + value);
  }

}
