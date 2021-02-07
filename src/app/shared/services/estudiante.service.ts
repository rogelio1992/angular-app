import { Estudiante } from 'src/app/shared/model/estudiante';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor() { }
  getData() {
    return [
      {
        id: 1,
        nombre: 'Rogelio Gonzalez',
        ciudad: 'Matanzas',
        fotoUrl: '../../../assets/test.jpg'
      },
      {
        id: 2,
        nombre: 'Irisliana Pujol',
        ciudad: 'Havana',
        fotoUrl: '../../../assets/test.jpg'
      },
      {
        id: 3,
        nombre: 'Jason Pujol',
        ciudad: 'Santiago de Cuba'
      }, {
        id: 4,
        nombre: 'Paco Perez',
        ciudad: 'Cienfuegos'
      }

  ]
}
}
