import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  mostrar:boolean;

  constructor(){
    this.mostrar = true;
  }

  actualizarVista(){
    this.mostrar = !this.mostrar;
  }
}
