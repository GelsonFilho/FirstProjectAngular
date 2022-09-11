import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MateriaComponent } from './components/materia/materia.component';
import { RecentesComponent } from './components/recentes/recentes.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  {
    path : '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'materia',
    component: MateriaComponent
  },
  {
    path: 'recentes',
    component: RecentesComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
