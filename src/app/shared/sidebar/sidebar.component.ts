import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { Sidebar } from 'primeng/sidebar';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  currentUrl: string = '';
  activeItem: number = 1; // Elemento activo por defecto

  constructor(private router: Router) { }

  
  
  ngOnInit() {
      this.getCurrentUrl()
      this.initilizeActiveItem()
  }

  //Obtener la URL actual
  getCurrentUrl() {
    this.currentUrl = this.router.url;
    console.log('Current URL:', this.currentUrl);
  }

  initilizeActiveItem() {
    if(this.currentUrl.includes('inicio')){
      this.activeItem = 1
    } else if(this.currentUrl.includes('mis-pedidos')){
      this.activeItem = 2
    }
  }

  // Función para cambiar el elemento activo
  setActiveItem(itemNumber: number) {
    this.activeItem = itemNumber;
  }
}
