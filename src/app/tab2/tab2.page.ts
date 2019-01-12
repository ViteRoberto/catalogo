import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public hoja: ActionSheetController, public camino: Router) { }

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

  regresar(){
    this.camino.navigate(['/']);
  }
}
