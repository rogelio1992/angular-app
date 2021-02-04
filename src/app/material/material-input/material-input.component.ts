import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-material-input',
  templateUrl: './material-input.component.html',
  styleUrls: ['./material-input.component.css']
})
export class MaterialInputComponent implements OnInit {
  usuario = {
    nombre: 'Luis'
  };

  placeholder = {
    nombre: 'Nombre'
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.usuario.nombre = 'Juan';
      this.placeholder.nombre = 'Apellido';
    }, 2000);
  }

  // tslint:disable-next-line: typedef
  onKeyUp($event) {
    console.log('keyUp, ', $event, this.usuario.nombre);
  }

  // tslint:disable-next-line: typedef
  onBlur($event: FocusEvent) {
    console.log('onBlur, ', $event);
  }

}
