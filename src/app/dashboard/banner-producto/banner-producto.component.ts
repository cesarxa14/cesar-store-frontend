import { Component, Input, OnInit } from '@angular/core';
import {productsBanner} from 'src/app/config/inicio-config';

interface ProductBanner {
  name: string,
  image: string
}

@Component({
  selector: 'app-banner-producto',
  templateUrl: './banner-producto.component.html',
  styleUrls: ['./banner-producto.component.css']
})
export class BannerProductoComponent implements OnInit{


  bannerList: ProductBanner[] = [] 

  constructor(){
    this.bannerList = productsBanner;
  }

  ngOnInit(): void {
    this.bannerList = productsBanner;
  }

}
