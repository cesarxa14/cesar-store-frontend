import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'mis-pedidos', component: MisPedidosComponent },
    ] 
  },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
