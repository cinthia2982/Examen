import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisosService } from '../services/avisos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.page.html',
  styleUrls: ['./crear-aviso.page.scss']
})
export class CrearAvisoPage {
  avisoForm: FormGroup;
  photo: string | undefined;

  constructor(private fb: FormBuilder, private avisosService: AvisosService, private camera: Camera) {
    this.avisoForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  onSubmit() {
    if (this.avisoForm.valid) {
      const aviso = {
        ...this.avisoForm.value,
        date: new Date().toISOString(),
        photo: this.photo
      };
      this.avisosService.createAviso(aviso).then(() => {
        // Manejar la redirección o notificación
      });
    }
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData: string) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
    }, (err: any) => {
      // Handle error
    });
  }
}



