import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {

  empleado: Empleado

  constructor(private empleadoService: EmpleadoService) {
    this.empleado = new Empleado();
  }

  ngOnInit(): void {
  }

  guardarData(){
    console.log(this.empleado);
    this.empleadoService.guardarEmpleado(this.empleado).subscribe();
  }
}
