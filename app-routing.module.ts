import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { CrearAvisoPage } from './crear-aviso/crear-aviso.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'crear-aviso', component: CrearAvisoPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
