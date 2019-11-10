import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Julian';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  title = 'pipesManagment';
  pi = Math.PI;
  porcentaje = 0.234;
  salario = 12345;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  };

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Llego la data');
    }, 1500);
  });
  fecha = new Date();

  nombre2 = 'julian daVid echEverri garCia'; // para trabajar con un pipe personalizado,
  videoUrl = 'ky6L1cRepiI';
  activar = true;
}
