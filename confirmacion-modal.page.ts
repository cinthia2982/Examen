import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Aviso } from '../models/aviso';

@Component({
  selector: 'app-confirmacion-modal',
  templateUrl: './confirmacion-modal.page.html',
  styleUrls: ['./confirmacion-modal.page.scss']
})
export class ConfirmacionModalPage implements OnInit {
  aviso: Aviso;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.aviso = this.navParams.get('aviso');
  }

  ngOnInit() {}

  confirm() {
    this.modalController.dismiss({ confirm: true });
  }

  dismiss() {
    this.modalController.dismiss({ confirm: false });
  }
}
