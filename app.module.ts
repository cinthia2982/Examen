import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite/ngx';
import { Camera } from '@ionic-native/camera/ngx';

import { HomePage } from './home/home.page';
import { CrearAvisoPage } from './crear-aviso/crear-aviso.page';
import { AvisosListComponent } from './avisos-list/avisos-list.component';
import { ConfirmacionModalPage } from './confirmacion-modal/confirmacion-modal.page';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    CrearAvisoPage,
    AvisosListComponent,
    ConfirmacionModalPage,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SQLite, Camera],
  bootstrap: [AppComponent]
})
export class AppModule {}
