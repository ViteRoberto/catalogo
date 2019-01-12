import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  constructor(public sheet: ActionSheetController) { }

  async llamar(){
    const hoja = await this.sheet.create({
      header: 'Opciones...',
      buttons: [{
        text: "Llamar",
        icon: "call"
      },
      {
        text: "Eliminar",
        role: "destructive"
      }]
    });

    await hoja.present();
  }

  ngOnInit() {
  }

}
