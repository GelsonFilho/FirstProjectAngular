import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecentesComponent } from './components/recentes/recentes.component';
import { MateriaComponent } from './components/materia/materia.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RecentesComponent,
    MateriaComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
