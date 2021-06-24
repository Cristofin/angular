import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitán América';
  nombre2: string = 'crIsTof luQUe';
  arreglo = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 3500.95;
  fecha: Date = new Date();
  activar: boolean = true;
  idioma: string = 'es';
  videoUrl: string = 'https://www.youtube.com/embed/fGTHva50iFU';

  valorPromesa = new Promise<string>((res) => {

    setTimeout(() => {

      res('Ha llegado el dato');

    }, 3500);

  });

  heroe = {

    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {

      calle: 'Primera',
      numero: 20

    }

  }

}
