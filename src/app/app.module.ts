import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { AsideComponent } from './aside/aside.component';
import { ListarEmpleadosComponent } from './listar-empleados/listar-empleados.component';
import { AgregarEmpleadoComponent } from './agregar-empleado/agregar-empleado.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpleadoService } from './empleado.service';
import { DetalleEmpleadoComponent } from './detalle-empleado/detalle-empleado.component';
import { EditarEmpleadoComponent } from './editar-empleado/editar-empleado.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    AsideComponent,
    ListarEmpleadosComponent,
    AgregarEmpleadoComponent,
    DashboardComponent,
    DetalleEmpleadoComponent,
    EditarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
