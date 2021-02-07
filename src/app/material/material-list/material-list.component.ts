import { Component, OnInit } from '@angular/core';
import { Estudiante } from 'src/app/shared/model/estudiante';
import { EstudianteService } from 'src/app/shared/services/estudiante.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  listaEstudiante: Estudiante[];
  constructor(private service: EstudianteService) { }

  ngOnInit(): void {
    console.log('Inicializando el componente Material List');
    this.listaEstudiante = this.service.getData();

  }

}
