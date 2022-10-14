import { Component, OnInit, Input } from '@angular/core';
import { Empleado } from '../empleados';

@Component({
  selector: 'app-bono',
  templateUrl: './bono.component.html',
  styleUrls: ['./bono.component.css']
})
export class BonoComponent {

  display: string;

  @Input() empleado !: Empleado;

  constructor() {
    this.display = 'hidden';
  }

  detalles() {
    if (this.display == 'hidden') {
      this.display = 'visible';
    } else {
      this.display = 'hidden';
    }
  }
}
