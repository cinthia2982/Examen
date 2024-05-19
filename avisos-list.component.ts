import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../services/avisos.service';
import { Aviso } from '../models/aviso';
import { ModalController } from '@ionic/angular';
import { ConfirmacionModalPage } from '../confirmacion-modal/confirmacion-modal.page';

@Component({
  selector: 'app-avisos-list',
  templateUrl: './avisos-list.component.html',
  styleUrls: ['./avisos-list.component.scss']
})
export class AvisosListComponent implements OnInit {
  avisos: Aviso[] = [];

  constructor(private avisosService: AvisosService, private modalController: ModalController) {}

  ngOnInit(): void {
    this.loadAvisos();
  }

  loadAvisos() {
    this.avisosService.getAvisos().then(data => {
      this.avisos = data;
    });
  }

  async deleteAviso(aviso: Aviso) {
    const modal = await this.modalController.create({
      component: ConfirmacionModalPage,
      componentProps: { aviso }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data && result.data.confirm) {
        this.avisosService.deleteAviso(aviso.id).then(() => this.loadAvisos());
      }
    });

    return await modal.present();
  }
}
