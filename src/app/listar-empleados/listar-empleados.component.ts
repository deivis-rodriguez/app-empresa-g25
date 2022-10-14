import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {

  listaEmpleados: Empleado[] ;

  /*for (let empleado of this.listaEmpleados) {

   }*/

  constructor(private empleadoService: EmpleadoService) {
    this.listaEmpleados =[]
  }

  ngOnInit(): void {  
    this.empleadoService.listarEmpleados().subscribe( empleados=>{
      this.listaEmpleados = empleados;
    })
  }

}
