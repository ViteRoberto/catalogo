import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  

  constructor(public hoja: ActionSheetController, public camino: Router, public alerta: AlertController, public cargando: LoadingController) {

   }

  async llamarHoja1(){
    const hoja1 = await this.hoja.create({
      header: 'Opciones...',
      buttons: [{
        text: 'No hace nada',
        icon: 'call'
      },
    {
      text: 'Regresa a tabs',
      icon: 'home',
      role: 'destructive',
      handler: () => {
        this.regresar();
      }
    }]
    });
    await hoja1.present();
  }

  async llamarAlerta1(){
    const alerta1 = await this.alerta.create({
      header: "Alerta ¡AMBER!",
      subHeader: "No seas Necio...",
      message: "Escribe tu nombre y luego largate a la pantalla anterior",
      inputs: [{
        name: "nombre",
        type: "text",
        placeholder: "Tu Nombre y luego vete"
      }],
      buttons: [{
        text: "Ok",
        handler: () => {
          this.regresar();
        }
      }]
    });
    await alerta1.present();
  }

  regresar(){
    this.camino.navigate(['/']);
  }
}
