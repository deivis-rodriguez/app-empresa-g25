import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Empleado } from './empleados';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private empleadoUrl: string;

  constructor(private http: HttpClient) {
    this.empleadoUrl = 'http://localhost:8080/empleados';
  }

  public listarEmpleados(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(this.empleadoUrl)
  }

  public getEmpleado(idEmpleado: number): Observable<Empleado> {
    let ruta = `${this.empleadoUrl}/${idEmpleado}`;
    return this.http.get<Empleado>(ruta)
  }

  public guardarEmpleado(empleado: Empleado) {
    return this.http.post<Empleado>(this.empleadoUrl, empleado);
  }

  public eliminarEmpleado(idEmpleado: number) {
    let ruta = `${this.empleadoUrl}/${idEmpleado}`;
    return this.http.delete<Empleado>(ruta)
  }

  public actualizarEmpleado(idEmpleado: number, empleado: Empleado) {
    let ruta = `${this.empleadoUrl}/${idEmpleado}`;
    return this.http.put<Empleado>(ruta, empleado)

  }
}
