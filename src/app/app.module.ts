import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './component/app/app.component';
import { FotoComponent } from './component/foto/foto.component';
import { PerfilComponent } from './component/perfil/perfil.component';
import { EstudiosComponent } from './component/estudios/estudios.component';
import { ComplementariosComponent } from './component/complementarios/complementarios.component';
import { ExperienciaComponent } from './component/experiencia/experiencia.component';
import { ReferenciasPersonalesComponent } from './component/referencias-personales/referencias-personales.component';
import { ReferenciasLaboralesComponent } from './component/referencias-laborales/referencias-laborales.component';
import { FirmaComponent } from './component/firma/firma.component';

@NgModule({
  declarations: [
    AppComponent,
    FotoComponent,
    PerfilComponent,
    EstudiosComponent,
    ComplementariosComponent,
    ExperienciaComponent,
    ReferenciasPersonalesComponent,
    ReferenciasLaboralesComponent,
    FirmaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
