import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute } from '@angular/router';
import { Empleado } from '../empleados';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {

  empleado: Empleado;

  constructor(
    private empleadoServicio: EmpleadoService,
    private ruta: ActivatedRoute,
    private location: Location
  ) {
    this.empleado = new Empleado()
  }

  ngOnInit(): void {
    const id: number = Number(this.ruta.snapshot.paramMap.get('idEmpleado'));
    this.empleadoServicio.getEmpleado(id).subscribe((empleado: Empleado) => {
      this.empleado = empleado
    })
  }

  eliminar() {
    this.empleadoServicio.eliminarEmpleado(this.empleado.idEmpleado).subscribe(
      () => {
        alert('empleado eliminado');
        this.location.back()
      }
    )
  }

}
