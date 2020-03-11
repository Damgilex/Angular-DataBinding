import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'codigoMentor02';
  titulo:any = 'titulo';

  datos: any = {
    nombre:'Diego',
    apellido: 'Herrera',
    edad: 18,
    documento: '46413065146'
  };

  eventoBoton(){
    console.log("event binding");
  }
}
