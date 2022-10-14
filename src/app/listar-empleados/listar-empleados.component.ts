import { Component, OnInit } from '@angular/core';
import { empleados, Empleado } from '../empleados';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  listaEmpleados = empleados;

  /*for (let empleado of this.listaEmpleados) {

   }*/

  constructor() {
  }

  ngOnInit(): void {  }

}
