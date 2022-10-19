import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'empleados', component: ListarEmpleadosComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agregar-empleado', component: AgregarEmpleadoComponent },
  { path: 'empleados/:idEmpleado', component: DetalleEmpleadoComponent },
  { path: 'empleados/:idEmpleado/editar-empleado', component: EditarEmpleadoComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
