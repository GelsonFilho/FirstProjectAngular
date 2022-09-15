import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RecentesComponent } from './components/recentes/recentes.component';
import { MateriaComponent } from './components/materia/materia.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ContatoComponent } from './components/contato/contato.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";


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
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
