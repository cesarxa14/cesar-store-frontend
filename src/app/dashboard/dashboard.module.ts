import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { InicioComponent } from './inicio/inicio.component';

//PRIMENG MODULES
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { DividerModule } from 'primeng/divider';
import { ListboxModule } from 'primeng/listbox';
import { MisPedidosComponent } from './mis-pedidos/mis-pedidos.component';
import { BannerProductoComponent } from './banner-producto/banner-producto.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    InicioComponent,
    MisPedidosComponent,
    BannerProductoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    //PRIMENG MODULES
    ButtonModule,
    SidebarModule,
    AvatarModule,
    ImageModule,
    DividerModule,
    ListboxModule
  ]
})
export class DashboardModule { }
