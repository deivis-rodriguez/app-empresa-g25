import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: '../agregar-empleado/agregar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  
  empleado: Empleado = new Empleado();
  textoBtn: string = 'Editar';
  
  constructor(
    private empleadoServicio: EmpleadoService,
    private ruta: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    const id: number = Number(this.ruta.snapshot.paramMap.get('idEmpleado'));
    this.empleadoServicio.getEmpleado(id).subscribe((empleado: Empleado) => {
      this.empleado = empleado
    })
  }

  guardarData() {
    this.empleadoServicio.actualizarEmpleado(this.empleado.idEmpleado, this.empleado).subscribe(
      () => {
        alert('empleado actualizado');
        this.location.back();
      }
    )
  }

}
