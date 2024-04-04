import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

  titulo:string = "Algo";

  constructor(){
    this.titulo = this.titulo + " otra informacion";

    console.log(this.titulo);

  }

}
